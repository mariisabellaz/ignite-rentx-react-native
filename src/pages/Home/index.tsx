import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {Header} from '../../components/Header';
import {Car} from '../../components/Car';
import {Loading} from '../../components/Loading';

import {CarsDTO} from '../../models/Cars';

import Logo from '../../assets/icons/logo.svg';
import api from '../../services/api';

import {
    Container,
    HeaderWrapper,
    TotalCars,
    CarList,
    EmptyListCars,
    MyCarsButton,
    CarIcon
} from './styles';

export function Home() {
    const [loading, setLoading] = useState(true)
    const [cars, setCars] = useState<CarsDTO[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }

        fetchCars();
    }, []);

    function handleCarDetails(car: CarsDTO) {
        navigation.navigate('CarDetails', {car})
    }

    function handleMyCars() {
        navigation.navigate('MyCars')
    }

    return (
        <Container>
            <Header height={113}>
                <HeaderWrapper>
                    <Logo width={RFValue(108)} height={RFValue(12)}/>
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderWrapper>
            </Header>

            {
                loading
                    ? <Loading/>
                    : <CarList
                        data={cars}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <Car
                                data={item}
                                onPress={() => handleCarDetails(item)}
                            />
                        )}
                        ListEmptyComponent={() => (
                            <EmptyListCars>Não encontramos nenhum carro para alugar</EmptyListCars>
                        )}
                    />
            }

            <MyCarsButton onPress={handleMyCars}>
                <CarIcon name="car-sport-sharp"/>
            </MyCarsButton>
        </Container>
    );
}

