import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';

import {CarsDTO} from '../../models/Cars';
import {getAccessoryIcon} from '../../utils/getAccessoryIcon';

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage,
} from './styles';

interface ICarProps extends RectButtonProps{
    data: CarsDTO;
}

export function Car({ data, ...rest } : ICarProps) {
    const {
        brand,
        name,
        thumbnail,
        rent,
        fuel_type
    } = data

    const MotorIcon = getAccessoryIcon(fuel_type);

    return (
        <Container {...rest}>
            <Details>
                <Brand>{brand}</Brand>
                <Name>{name}</Name>

                <About>
                    <Rent>
                        <Period>{rent.period}</Period>
                        <Price>{`R$ ${rent.price}`}</Price>
                    </Rent>

                    <Type>
                        <MotorIcon/>
                    </Type>
                </About>
            </Details>

            <CarImage source={{uri: thumbnail}}/>
        </Container>
    );
}

