import styled from 'styled-components/native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View``;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingHorizontal: 16,
    },
    showsVerticalScrollIndicator: false
})`
  flex: 1;
`;


export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 28px 0 16px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  color: ${({theme}) => theme.colors.text.details};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.text.title};
  font-size: ${({theme}) => theme.fontsize.subtitle}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
  text-transform: capitalize;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  color: ${({theme}) => theme.colors.text.details};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${({theme}) => theme.colors.text.price};
  font-size: ${({theme}) => theme.fontsize.subtitle}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: right;
  text-transform: capitalize;
`;

export const Accessories = styled.View`
  width: 100%;
  
  flex-direction: row;
  flex-wrap: wrap;
  
  align-items: center;
  justify-content: space-between;
`;

export const About = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.primary_regular};

  margin-top: 23px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background.primary};
  
  padding: 24px 16px ${getBottomSpace() + 15}px;
`;


