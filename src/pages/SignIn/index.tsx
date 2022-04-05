import React, { useCallback, useRef } from 'react';
import { Alert, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/AntDesign';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/img/logo.svg';

import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Brand,
  BrandText,
  Title,
  ForgotPassword,
  ForgotPasswordTitle,
  CreateAccountButton,
  CreateAccountButtonTitle,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

function SignIn() {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('O e-mail digitado está inválido'),
          password: Yup.string().required('A senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err as Yup.ValidationError);

          formRef.current?.setErrors(errors);

          Alert.alert(
            'Erro de validação',
            'Verifique as suas informações e se os campos estão preenchidos corretamente.',
          );

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro com a sua conexão, verifique as suas informações ou tente novamente mais tarde.',
        );
      }
    },
    [signIn],
  );

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Brand>
            <Logo width={300} height={70} />

            <BrandText>Consultas picológicas online</BrandText>
          </Brand>

          <Title>Conecte-se</Title>

          <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Input
              name="email"
              icon="mail"
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Button>
          </Form>

          <ForgotPassword>
            <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
          </ForgotPassword>
        </Container>
      </ScrollView>

      <CreateAccountButton
        onPress={() => navigation.navigate('SignUp' as never)}
      >
        <Icon name="adduser" size={28} color="#ff5733" />
        <CreateAccountButtonTitle>Criar uma Conta</CreateAccountButtonTitle>
      </CreateAccountButton>
    </>
  );
}

export default SignIn;
