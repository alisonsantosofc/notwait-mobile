import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #1b3750;
  border-radius: 10px;
  background: #1b3750;

  ${props =>
    props.isErrored &&
    css`
      border-color: #2fa3f0;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff5733;
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
  margin-bottom: 4px;
`;

export const textInputStyle = {
  flex: 1,
  height: '100%',
  fontFamily: 'Poppins-Regular',
  fontSize: 16,
  color: '#e9e9e9',
};
