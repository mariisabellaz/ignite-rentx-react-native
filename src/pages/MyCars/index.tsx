import React, {useEffect, useState} from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useNavigation, useRoute} from '@react-navigation/native';

import {BackButton} from '../../components/Buttons/BackButton';
import {Header} from '../../components/Header';
import {Loading} from '../../components/Loading';
import {Car} from '../../components/Car';

import {CarsDTO} from '../../models/Cars';

import api from '../../services/api';

import {
    Container,
    Content,
    Title,
    Subtitle,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
    CarList,
    EmptyListCars,
    CarWrapper,
    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate,
    ArrowIcon,
} from './styles';

export interface CarProps {
    id: string;
    user_id: string;
    car: CarsDTO,
    startDate: string;
    endDate: string;
}

export function MyCars() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState<CarProps[]>([]);

    function handleBack() {
        navigation.goBack();
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get(`/schedules_byuser?user_id=1`)
                setCars(response.data);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCars();
    }, []);

    return (
        <Container>
            <Header height={RFPercentage(29)}>
                <BackButton onPress={handleBack}/>
                <Title>
                    Seus agendamentos, {'\n'}
                    estão aqui.
                </Title>
                <Subtitle>Conforto, segurança e praticidade.</Subtitle>
            </Header>
            <Content>
                {
                    loading
                        ? <Loading/>
                        :
                        <>
                            <Appointments>
                                <AppointmentsTitle>Agendamento feitos</AppointmentsTitle>
                                <AppointmentsQuantity>05</AppointmentsQuantity>
                            </Appointments>
                            <CarList
                                data={cars}
                                keyExtractor={item => item.id}
                                renderItem={({item}) => (
                                    <CarWrapper>
                                        <Car data={item.car}/>
                                        <CarFooter>
                                            <CarFooterTitle>Período</CarFooterTitle>
                                            <CarFooterPeriod>
                                                <CarFooterDate>{item.startDate}</CarFooterDate>
                                                <ArrowIcon name="arrowright"/>
                                                <CarFooterDate>{item.endDate}</CarFooterDate>
                                            </CarFooterPeriod>
                                        </CarFooter>
                                    </CarWrapper>
                                )}
                                ListEmptyComponent={() => (
                                    <EmptyListCars>Não encontramos nenhum carro alugado</EmptyListCars>
                                )}
                            />
                        </>
                }
            </Content>
        </Container>
    );
}
