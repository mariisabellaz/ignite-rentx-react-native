import styled, {css} from 'styled-components/native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

interface DateValueProps {
    selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background.secondary};
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

  margin: 25px 0;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin: 20px 0 35px;
`;

export const DateInfo = styled.View<DateValueProps>`
  width: 30%;

  ${({selected, theme}) => !selected && css`
    border-bottom-color: ${theme.colors.border};
    border-bottom-width: 1.5px;
    padding-bottom: 5px;
  `};
`;

export const DateTitle = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  font-family: ${({theme}) => theme.fontFamily.secondary_medium};

  text-align: left;
  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  color: ${({theme}) => theme.colors.text.inverted};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.primary_medium};

  text-transform: uppercase;
  margin-top: 9px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 16,
    },
    showsVerticalScrollIndicator: false
})`
  flex: 1;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 16px ${getBottomSpace() + 15}px;
`;


