import React, { useCallback, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Icon from 'react-native-vector-icons/Ionicons';

import SignIn from '../SignIn';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../assets/img/logo.svg';

import {
  Container,
  Brand,
  BrandText,
  Title,
  BackToSignButton,
  BackToSignButtonTitle,
} from './styles';

function SignUp() {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

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
            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="Email" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => formRef.current?.submitForm()}>
              Cadastrar
            </Button>
          </Form>
        </Container>
      </ScrollView>

      <BackToSignButton onPress={() => navigation.navigate('SignIn' as never)}>
        <Icon name="arrow-undo-outline" size={32} color="#ff5733" />
        <BackToSignButtonTitle>Voltar para conectar-se</BackToSignButtonTitle>
      </BackToSignButton>
    </>
  );
}

export default SignUp;
