import React, {ReactNode} from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';

export function Loading() {
    const theme = useTheme();
    return (
        <ActivityIndicator
            color={theme.colors.primary}
            size="small"
            style={{flex: 1}}
        />
    );
}

