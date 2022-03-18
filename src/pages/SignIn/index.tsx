import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/img/logo.png';

import { Container, Brand, BrandText, Title } from './styles';

function SignIn() {
  return (
    <Container>
      <Brand>
        <Image source={logoImg} width={500} />
        <BrandText>Consultas picológicas online</BrandText>
      </Brand>

      <Title>Conecte-se</Title>

      <Input name="email" icon="mail" placeholder="Email" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button>Entrar</Button>
    </Container>
  );
}

export default SignIn;
