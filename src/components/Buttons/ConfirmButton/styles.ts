import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 80px;
  height: 56px;
  
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme}) => theme.colors.shapes.dark};
`;

export const Label = styled.Text`
  color: ${({ theme}) => theme.colors.text.inverted};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.primary_medium};

  text-align: center;
`;

