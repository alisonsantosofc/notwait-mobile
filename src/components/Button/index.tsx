import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: React.ReactNode;
}

function Button({ children, ...restProps }: ButtonProps) {
  return (
    <Container {...restProps}>
      <Title>{children}</Title>
    </Container>
  );
}

export default Button;
