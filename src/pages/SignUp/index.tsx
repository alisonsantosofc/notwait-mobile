import React, { useCallback, useRef } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/img/logo.svg';

import {
  Container,
  Brand,
  BrandText,
  Title,
  BackToSignLink,
  BackToSignLinkTitle,
} from './styles';

function SignUp() {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

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

          <Title>Cadastre-se</Title>

          <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Input
              name="name"
              icon="user"
              placeholder="Nome"
              autoFocus
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => {
                emailInputRef.current?.focus();
              }}
            />
            <Input
              ref={emailInputRef}
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
              textContentType="newPassword"
              autoCapitalize="none"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button onPress={() => formRef.current?.submitForm()}>
              Cadastrar
            </Button>
          </Form>
        </Container>
      </ScrollView>

      <BackToSignLink onPress={() => navigation.navigate('SignIn' as never)}>
        <Icon name="arrow-left" size={28} color="#ff5733" />
        <BackToSignLinkTitle>Voltar para conectar-se</BackToSignLinkTitle>
      </BackToSignLink>
    </>
  );
}

export default SignUp;
