import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, Icon, textInputStyle } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

interface InputReference extends TextInput {
  value: string;
}

function Input(
  { name, icon, placeholder, onChangeText, ...rest }: InputProps,
  ref: any,
) {
  const inputRef = useRef<InputReference>(null);

  const { fieldName, defaultValue = '', error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

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
      setValue(value) {
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
    <Container isFocused={isFocused} isErrored={!!error}>
      {icon && (
        <Icon
          name={icon}
          size={22}
          color={isFocused || isFilled ? '#ff5733' : '#4a6a88'}
        />
      )}

      <TextInput
        ref={inputRef}
        style={textInputStyle}
        placeholderTextColor="#4a6a88"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={handleChangeText}
        {...rest}
      />
    </Container>
  );
}

export default forwardRef(Input);
