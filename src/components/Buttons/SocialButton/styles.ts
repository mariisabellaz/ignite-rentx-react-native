import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Wrapper = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.background.secondary};
  border-radius: 5px;
  
  width: 100%;
  height: ${RFValue(50)}px;
  flex-direction: row;
  
  align-items: center;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
  height: 100%;
  
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;

  border-color: ${({theme}) => theme.colors.background};
  border-right-width: 1px;
`;

export const Label = styled.Text`
  flex: 1;
  
  color: ${({theme}) => theme.colors.text.title};
  font-family: ${({theme}) => theme.fontFamily.secondary_regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  
  text-align: center;
`;




