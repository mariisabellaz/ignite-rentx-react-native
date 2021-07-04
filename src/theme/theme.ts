import {RFValue} from "react-native-responsive-fontsize";

export default {
    colors: {
        primary: '#DC1637',
        hover: '#FDEDEF',
        header: '#1B1B1F',
        background: {
            primary: '#F4F5F6',
            secondary: '#FFFFFF'
        },
        success: '#03B252',
        text: {
            title: '#47474D',
            default: '#7A7A80',
            details: '#AEAEB3',
            price: '#DC1637',
            inverted: '#FFFFFF',
        },
        shapes: {
            default: '#E1E1E8',
            dark: '#29292E',
            line: '#EBEBF0',
            light: '#FFFFFF',
        },
        border: '#47474D',
    },
    fontsize: {
        helper: RFValue(10),
        regular: RFValue(13),
        medium: RFValue(15),
        icon: RFValue(17),
        title: RFValue(30),
        subtitle: RFValue(20),
        price: RFValue(25),
    },
    fontFamily: {
        primary_regular: 'Inter_400Regular',
        primary_medium: 'Inter_500Medium',

        secondary_regular: 'Archivo_400Regular',
        secondary_italic: 'Archivo_400Regular_Italic',
        secondary_medium: 'Archivo_500Medium',
        secondary_bold: 'Archivo_600SemiBold',
    }
}
