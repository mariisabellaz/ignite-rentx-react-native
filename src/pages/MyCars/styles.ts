import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {AntDesign} from '@expo/vector-icons';

import {CarProps} from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.primary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;

  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.inverted};
  font-size: ${({theme}) => theme.fontsize.title}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_bold};

  margin-top: 25px;
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.colors.text.inverted};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_regular};

  margin: 18px 0 34px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.primary_regular};

  text-align: left;
`;

export const AppointmentsQuantity = styled.Text`
  color: ${({theme}) => theme.colors.text.title};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_regular};
`;

export const CarList = styled(
    FlatList as new () => FlatList<CarProps>)
    .attrs({
        showsVerticalScrollIndicator: false,
        contentContainerStyle: {paddingBottom: getBottomSpace()}
    })`
`;

export const EmptyListCars = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_italic};

  text-align: center;

  margin: 40px 16px 0;
`;

export const CarWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.background.primary};
  padding-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background.secondary};

  padding: 12px;
  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarFooterTitle = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
  text-transform: uppercase;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  color: ${({theme}) => theme.colors.text.title};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  font-family: ${({theme}) => theme.fontFamily.primary_regular};
`;

export const ArrowIcon = styled(AntDesign)`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.subtitle}px;
  
  margin: 0 10px;
`;
