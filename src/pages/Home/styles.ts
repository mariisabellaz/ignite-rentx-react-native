import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {RectButton} from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import {CarsDTO} from '../../models/Cars';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.primary};
`;

export const HeaderWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
`;

export const TotalCars = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.primary_regular};
`;

export const CarList = styled(
    FlatList as new () => FlatList<CarsDTO>)
    .attrs({
        showsVerticalScrollIndicator: false,
        contentContainerStyle: {
            paddingBottom: getBottomSpace(),
            paddingHorizontal: 16
        }
    })`
`;

export const EmptyListCars = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_italic};
  
  text-align: center;
  
  margin: 40px 16px 0;
`;

export const MyCarsButton = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  
  width: 60px;
  height: 60px;
  border-radius: 30px;
  
  position: absolute;
  bottom: 13px;
  right: 22px;
`;

export const CarIcon = styled(Ionicons)`
  color: ${({theme}) => theme.colors.shapes.light};
  font-size: ${({theme}) => theme.fontsize.title}px;
`;
