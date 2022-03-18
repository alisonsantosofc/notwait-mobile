import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #ff5733;
  border-radius: 10px;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 18px;
  color: #fff;
`;
