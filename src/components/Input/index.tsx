import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

interface InputValueReference {
  value: string;
}

function Input({ name, icon, placeholder }: InputProps) {
  const inputElementRef = useRef<any>(null);

  const { fieldName, defaultValue = '', error, registerField } = useField(name);

  const inputValueRef = useRef({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {icon && <Icon name={icon} size={22} color="#4a6a88" />}

      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#4a6a88"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
      />
    </Container>
  );
}

export default Input;
