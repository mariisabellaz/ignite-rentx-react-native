import styled from 'styled-components/native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

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

export const RentalPeriod = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.shapes.line};
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  margin-top: 40px;
  padding-bottom: 16px;
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${({theme}) => theme.colors.primary};
  
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.text.inverted};
  font-size: ${RFValue(23)}px;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  color: ${({theme}) => theme.colors.text.title};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.primary_medium};

  text-transform: uppercase;
  margin-top: 9px;
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
  text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RentalPriceQuota = styled.Text`
  color: ${({theme}) => theme.colors.text.title};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.primary_medium};
`;

export const RentalPriceTotal = styled.Text`
  color: ${({theme}) => theme.colors.success};
  font-size: ${({theme}) => theme.fontsize.subtitle}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-transform: uppercase;
  margin-top: 9px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background.primary};
  
  padding: 24px 16px ${getBottomSpace() + 15}px;
`;


