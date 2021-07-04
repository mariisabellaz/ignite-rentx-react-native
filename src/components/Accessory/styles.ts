import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 109px;
  height: 92px;

  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.background.primary};
  
  padding: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  font-family: ${({theme}) => theme.fontFamily.primary_regular};

  text-align: center;
  line-height: ${RFValue(25)}px;
`;

