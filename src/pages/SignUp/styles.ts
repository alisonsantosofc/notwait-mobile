import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Brand = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #e9e9e9;
  margin-left: 100px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 26px;
  color: #e9e9e9;
  margin: 64px 0 24px;
`;

export const BackToSignLink = styled.TouchableOpacity`
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0;
  flex-direction: row;
  justify-content: center;
`;

export const BackToSignLinkTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  margin-left: 6px;
  color: #e9e9e9;
`;
