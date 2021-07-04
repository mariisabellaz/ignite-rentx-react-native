import 'react-native-gesture-handler';
import React from 'react';
import {
    Archivo_400Regular,
    Archivo_400Regular_Italic,
    Archivo_500Medium,
    Archivo_600SemiBold
} from '@expo-google-fonts/archivo';
import {useFonts, Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {ThemeProvider} from "styled-components";
import AppLoading from 'expo-app-loading';

import theme from './src/theme/theme';
import Routes from './src/routes';

export default function App() {
    const [fontLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_400Regular_Italic,
        Archivo_500Medium,
        Archivo_600SemiBold,
        Inter_400Regular,
        Inter_500Medium
    });

    if (!fontLoaded) {
        return <AppLoading/>
    }

    return (
        <ThemeProvider theme={theme}>
            <Routes/>
        </ThemeProvider>
    );
}
