import React from 'react';
import {useTheme} from 'styled-components';
import {BorderlessButtonProps} from 'react-native-gesture-handler';

import {Container, BackIcon} from './styles';

interface ButtonProps extends BorderlessButtonProps{
    color?: string;
}

export function BackButton({ color, ...rest } : ButtonProps) {
    const theme = useTheme();
    return (
        <Container {...rest}>
            <BackIcon
                name="arrow-back-ios"
                color={color ? color : theme.colors.shapes.light}
            />
        </Container>
    );
}

