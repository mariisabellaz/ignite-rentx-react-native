import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Accessories,
    About,
    Footer
} from './styles';
import {BackButton} from '../../components/Buttons/BackButton';
import {ImageSlider} from '../../components/ImageSlider';
import {Accessory} from '../../components/Accessory';
import {Button} from '../../components/Buttons/RectangleButton';

import {CarsDTO} from '../../models/Cars';
import {getAccessoryIcon} from '../../utils/getAccessoryIcon';

interface Params {
    car: CarsDTO,
}

export function CarDetails() {
    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleScheduling() {
        navigation.navigate('Scheduling', { car });
    }

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <Container>
            <Header>
                <BackButton color={theme.colors.shapes.dark} onPress={handleGoBack} />
            </Header>

            <Content>
                <CarImages>
                    <ImageSlider imagesUrl={car.photos} />
                </CarImages>

                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>
                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>{`R$ ${car.rent.price}`}</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {car.accessories.map((accessory) => (
                        <Accessory
                            key={accessory.type}
                            name={accessory.name}
                            icon={getAccessoryIcon(accessory.type)}
                        />
                    ))}
                </Accessories>

                <About>{car.about}</About>
            </Content>

            <Footer>
                <Button label="Escolher período do aluguel" onPress={handleScheduling}/>
            </Footer>
        </Container>
    );
}

