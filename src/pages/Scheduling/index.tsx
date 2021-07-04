import React, {useState} from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useNavigation, useRoute} from '@react-navigation/native';
import {format} from 'date-fns';

import {
    Container,
    Content,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Footer
} from './styles';
import {BackButton} from '../../components/Buttons/BackButton';
import {Button} from '../../components/Buttons/RectangleButton';
import {Header} from '../../components/Header';
import {CustomCalendar, DayProps, MarkedDatesProps, generateInterval} from '../../components/Calendar';

import {getPlatformDate} from '../../utils/getPlatformDate';
import {CarsDTO} from '../../models/Cars';

import ArrowLeft from '../../assets/icons/arrow.svg'

interface RentalPeriodProps {
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarsDTO,
}

export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);

    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleSchedulingDetails() {
        navigation.navigate('SchedulingDetails', {
            car,
            dates: Object.keys(markedDates),
        });
    }

    function handleBack() {
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end)
        setMarkedDates(interval);

        const startDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(startDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
        })
    }

    return (
        <Container>
            <Header height={RFPercentage(40)}>
                <BackButton onPress={handleBack}/>
                <Title>
                    Escolha uma data {'\n'}
                    de início e {'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo selected={!!rentalPeriod.startFormatted}>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{rentalPeriod.startFormatted}</DateValue>
                    </DateInfo>

                    <ArrowLeft/>

                    <DateInfo selected={!!rentalPeriod.endFormatted}>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>{rentalPeriod.endFormatted}</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>


            <Content>
                <CustomCalendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button
                    label="Confirmar"
                    onPress={handleSchedulingDetails}
                    enabled={!!rentalPeriod.startFormatted}
                />
            </Footer>
        </Container>
    );
}

