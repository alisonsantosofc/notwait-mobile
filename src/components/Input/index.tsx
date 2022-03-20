import React, { useCallback, useEffect, useRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, Icon, textInputStyle } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

export interface InputReference extends TextInput {
  value: string;
  ref: React.RefObject<InputReference> | null;
}

function Input({ name, icon, placeholder, onChangeText, ...rest }: InputProps) {
  const inputRef = useRef<InputReference>(null);

  const { fieldName, defaultValue = '', error, registerField } = useField(name);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;

        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' });
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value;
      if (onChangeText) onChangeText(value);
    },
    [onChangeText],
  );

  return (
    <Container>
      {icon && <Icon name={icon} size={22} color="#4a6a88" />}

      <TextInput
        ref={inputRef}
        style={textInputStyle}
        placeholderTextColor="#4a6a88"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={handleChangeText}
      />
    </Container>
  );
}

export default Input;
