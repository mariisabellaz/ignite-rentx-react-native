import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
    height: number;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: ${({height}) => RFValue(height)}px;
  background-color: ${({theme}) => theme.colors.header};
  
  padding: 16px 20px 0;
  justify-content: flex-end;
`;
