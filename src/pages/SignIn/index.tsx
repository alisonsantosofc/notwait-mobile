import React, { useCallback, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/AntDesign';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/img/logo.svg';

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

function SignIn() {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSubmit = useCallback((data: object) => {
    console.log(data);
  }, []);

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

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" icon="mail" placeholder="Email" />
            <Input name="password" icon="lock" placeholder="Senha" />

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
        <Icon name="adduser" size={32} color="#ff5733" />
        <CreateAccountButtonTitle>Criar uma Conta</CreateAccountButtonTitle>
      </CreateAccountButton>
    </>
  );
}

export default SignIn;
