import React from 'react';
import {useWindowDimensions, StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';
import {ConfirmButton} from '../../components/Buttons/ConfirmButton';

import LogoSvg from '../../assets/icons/logo_background_gray.svg'
import DoneSvg from '../../assets/icons/done.svg'

export function SchedulingCompleted() {
    const theme = useTheme();
    const navigation = useNavigation();
    const { width } = useWindowDimensions();

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.shapes.dark} translucent/>
            <LogoSvg width={width}/>
            <Content>
                <DoneSvg width={RFValue(80)} height={RFValue(80)}/>
                <Title>Carro alugado!</Title>
                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton label="OK" onPress={() => navigation.navigate('Home')}/>
            </Footer>

        </Container>
    );
}

