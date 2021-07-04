import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(126)}px;
  background-color: ${({theme}) => theme.colors.background.secondary};

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 24px;
  margin-bottom: 16px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  color: ${({theme}) => theme.colors.text.details};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.text.title};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
  text-transform: capitalize;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: flex-end;
  
  margin-top: 16px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  color: ${({theme}) => theme.colors.text.details};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${({theme}) => theme.colors.text.price};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
`;

export const Type = styled.View`
  margin-left: ${RFValue(25)}px;
`;

export const CarImage = styled.Image.attrs({
    resizeMode: 'contain',
})`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`;
