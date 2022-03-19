import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  margin-bottom: 8px;
  border-radius: 10px;
  background: #1b3750;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #e9e9e9;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
  margin-bottom: 4px;
`;
