import {parse, format} from 'date-fns'

export const withTime = (date) => {

    const parseDate = parse(date, 'MM/dd/yyyy HH:mm:ss', new Date());

    format(parseDate, 'MM/dd/yyyy ss:mm:HH');

    return parseDate;

}