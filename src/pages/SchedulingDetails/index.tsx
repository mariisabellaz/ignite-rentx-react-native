import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useTheme} from 'styled-components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {format} from 'date-fns';

import {BackButton} from '../../components/Buttons/BackButton';
import {ImageSlider} from '../../components/ImageSlider';
import {Accessory} from '../../components/Accessory';
import {Button} from '../../components/Buttons/RectangleButton';

import {CarsDTO} from '../../models/Cars';
import {getAccessoryIcon} from '../../utils/getAccessoryIcon';
import {getPlatformDate} from '../../utils/getPlatformDate';

import ArrowSvg from '../../assets/icons/arrow.svg';
import api from "../../services/api";

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
    RentalPeriod,
    CalendarIcon,
    Icon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
    Footer
} from './styles';

interface Params {
    car: CarsDTO,
    dates: string[],
}

interface RentalPeriodProps {
    startFormatted: string;
    endFormatted: string;
}

export function SchedulingDetails() {
    const [loading, setLoading] = useState(false);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car, dates } = route.params as Params;

    const rentTotal = Number(dates.length * car.rent.price);

    async function handleConfirmRental() {
        setLoading(true);

        try {
            const response = await api.get(`/schedules_bycars/${car.id}`);

            const unavailable_dates = [
                ...response.data.unavailable_dates,
                ...dates
            ];

            await api.post(`/schedules_byuser`, {
                user_id: 1,
                car,
                startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
                endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
            })

            await api.put(`/schedules_bycars/${car.id}`, {
                id: car.id,
                unavailable_dates
            })
                .then(() => {
                    navigation.navigate('SchedulingCompleted')
                    setLoading(false)
                })
                .catch(() => {
                    Alert.alert('Não foi possível confirmar o agendamento,')
                    setLoading(false)
                });

        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    function handleBack() {
        navigation.goBack();
    }

    useEffect(() => {
        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
        });
    }, []);

    return (
        <Container>
            <Header>
                <BackButton color={theme.colors.shapes.dark} onPress={handleBack} />
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
                <RentalPeriod>
                    <CalendarIcon>
                        <Icon name="calendar"/>
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{rentalPeriod.startFormatted}</DateValue>
                    </DateInfo>

                    <ArrowSvg width={30}/>

                    <DateInfo>
                    <DateTitle>ATÉ</DateTitle>
                    <DateValue>{rentalPeriod.endFormatted}</DateValue>
                </DateInfo>
                </RentalPeriod>
                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
                        <RentalPriceTotal>{`R$ ${rentTotal}`}</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>
            <Footer>
                <Button
                    label="Alugar agora"
                    color={theme.colors.success}
                    onPress={handleConfirmRental}
                    enabled={!loading}
                    loading={loading}
                />
            </Footer>
        </Container>
    );
}

