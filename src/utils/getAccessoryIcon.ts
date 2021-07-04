import SpeedSvg from '../assets/icons/speed.svg';
import AccelerationSvg from '../assets/icons/acceleration.svg';
import ForceSvg from '../assets/icons/force.svg';
import GasolineSvg from '../assets/icons/gasoline.svg';
import EnergySvg from '../assets/icons/energy.svg';
import HybridSvg from '../assets/icons/hybrid.svg';
import ExchangeSvg from '../assets/icons/exchange.svg';
import PeopleSvg from '../assets/icons/people.svg';
import CarSvg from '../assets/icons/car.svg';

export function getAccessoryIcon(type: string) {
    switch (type) {
        case 'speed':
            return SpeedSvg;
        case 'acceleration':
            return AccelerationSvg;
        case 'turning_diameter':
            return ForceSvg;
        case 'gasoline_motor':
            return GasolineSvg;
        case 'electric_motor':
            return EnergySvg;
        case 'hybrid_motor':
            return HybridSvg;
        case 'exchange':
            return ExchangeSvg;
        case 'seats':
            return PeopleSvg;
        default:
            return CarSvg;
    }
}
