import {eachDayOfInterval, format} from 'date-fns';

import {MarkedDatesProps, DayProps} from '../components/Calendar';
import {getPlatformDate} from './getPlatformDate';
import theme from '../theme/theme';

export function generateInterval(start: DayProps, end: DayProps) {
    let interval: MarkedDatesProps = {};

    eachDayOfInterval({start: new Date(start.timestamp), end: new Date(end.timestamp)})
        .forEach((item) => {
            const date = format(getPlatformDate(item), 'yyyy-MM-dd');

            interval = {
                ...interval,
                [date]: {
                    color: start.dateString === date || end.dateString === date
                    ? theme.colors.primary : theme.colors.hover,

                    textColor: start.dateString === date || end.dateString === date
                    ? theme.colors.hover : theme.colors.primary
                }
            }
        });

    return interval;
}
