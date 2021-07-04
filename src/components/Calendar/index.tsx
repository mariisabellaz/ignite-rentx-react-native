import React from 'react';
import {Platform} from 'react-native';
import {Calendar, DateCallbackHandler, LocaleConfig} from 'react-native-calendars';
import {useTheme} from 'styled-components';

import {localeConfig} from '../../utils/localeConfig'
import {generateInterval} from '../../utils/generateInterval'

import {ArrowIcon} from './styles';

LocaleConfig.locales['pt-br'] = localeConfig
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDatesProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    }
}

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

interface CalendarProps {
    markedDates: MarkedDatesProps;
    onDayPress: DateCallbackHandler;
}

function CustomCalendar({markedDates, onDayPress} : CalendarProps) {
    const theme = useTheme();

    return (
        <Calendar
            renderArrow={(direction) => (
                <ArrowIcon name={direction === 'left' ? 'chevron-left' : 'chevron-right'}/>
            )}
            headerStyle={{
                backgroundColor: theme.colors.background.secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text.details,
                paddingBottom: 17,
                marginBottom: 17,
                paddingHorizontal: Platform.OS === 'android' ? 24 : 0
            }}
            theme={{
                textDayFontFamily: theme.fontFamily.primary_regular,
                textDayHeaderFontFamily: theme.fontFamily.primary_medium,
                textDayHeaderFontSize: 10,
                textMonthFontFamily: theme.fontFamily.secondary_bold,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.text.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}

            firstDay={1}
            minDate={new Date()}
            markingType="period"
            markedDates={markedDates}
            onDayPress={onDayPress}
        />

    );
}

export {
    CustomCalendar,
    MarkedDatesProps,
    DayProps,
    generateInterval
}
