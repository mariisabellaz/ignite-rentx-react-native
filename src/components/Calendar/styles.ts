import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const ArrowIcon = styled(Feather)`
  color: ${({theme}) => theme.colors.shapes.dark};
  font-size: ${({theme}) => theme.fontsize.subtitle};
`;
