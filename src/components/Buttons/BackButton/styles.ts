import styled from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';
import {BorderlessButton} from 'react-native-gesture-handler';

interface Props {
    color: string;
}

export const Container = styled(BorderlessButton)`
  width: 50px;
  height: 50px;
`;

export const BackIcon = styled(MaterialIcons)<Props>`
  color: ${({color}) => color};
  font-size: ${({theme}) => theme.fontsize.icon}px;
`;
