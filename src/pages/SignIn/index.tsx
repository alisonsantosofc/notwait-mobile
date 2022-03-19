import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { ScrollView } from 'react-native';
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

          <Input name="email" icon="mail" placeholder="Email" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button>Entrar</Button>

          <ForgotPassword>
            <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
          </ForgotPassword>
        </Container>
      </ScrollView>

      <CreateAccountButton>
        <Icon name="adduser" size={32} color="#ff5733" />
        <CreateAccountButtonTitle>Criar uma Conta</CreateAccountButtonTitle>
      </CreateAccountButton>
    </>
  );
}

export default SignIn;
