import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface ImageIndexProps {
    active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;

  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  background-color: ${({theme, active}) =>
          active ? theme.colors.shapes.dark : theme.colors.shapes.default};
  
  margin-left: 8px;
  border-radius: 3px;
`;

export const CarImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(132)}px;
`;

export const CarImage = styled.Image.attrs({
    resizeMode: 'contain'
})`
  width: ${RFValue(288)}px;
  height: ${RFValue(132)}px;
`;

/*export const BackIcon = styled(MaterialIcons)<Props>`
  color: ${({color}) => color};
  font-size: ${({theme}) => theme.fontsize.icon}px;
`;*/
