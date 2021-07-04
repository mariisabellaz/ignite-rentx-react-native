import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';

import {Container} from './styles';

interface HeaderProps {
    children: ReactNode;
    height: number;
}

export function Header({ children, height } : HeaderProps) {
    const theme = useTheme();
    return (
        <Container height={height}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={theme.colors.header}
                translucent/>
            {children}
        </Container>
    );
}

