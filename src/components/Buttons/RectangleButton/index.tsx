import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RectButtonProps} from 'react-native-gesture-handler';

import {Container, Label} from './styles';

interface ButtonProps extends RectButtonProps{
    color?: string;
    label: string;
    enabled?: boolean
    loading?: boolean
}

export function Button({ color, label, enabled = true, loading = false, ...rest } : ButtonProps) {
    return (
        <Container
            color={color}
            enabled={enabled}
            {...rest}>
            {loading ? <ActivityIndicator size="small" color="#FFF"/> : <Label>{label}</Label>}
        </Container>
    );
}

