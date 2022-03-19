import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

function Input({ name, icon, placeholder }: InputProps) {
  return (
    <Container>
      {icon && <Icon name={icon} size={22} color="#4a6a88" />}

      <TextInput placeholderTextColor="#4a6a88" placeholder={placeholder} />
    </Container>
  );
}

export default Input;
