import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';

import {Container, Label} from './styles';

interface ButtonProps extends RectButtonProps{
    label: string;
}

export function ConfirmButton({ label, ...rest } : ButtonProps) {
    return (
        <Container {...rest}>
            <Label>{label}</Label>
        </Container>
    );
}

