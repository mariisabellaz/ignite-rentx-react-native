import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
    color?: string;
    enabled?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 56px;
  
  align-items: center;
  justify-content: center;
  
  background-color: ${({color, theme}) => color ? color : theme.colors.primary};
  opacity: ${({enabled}) => enabled ? 1 : 0.5};
`;

export const Label = styled.Text`
  color: ${({ theme}) => theme.colors.text.inverted};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  font-family: ${({theme}) => theme.fontFamily.primary_medium};

  text-align: center;
`;

