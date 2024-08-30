import {parse, format} from 'date-fns'

export const withTime = (date) => {

    const parseDate = parse(date, 'dd/MM/yyyy', new Date());

    format(parseDate, 'MM-dd-yyyy');

    return parseDate;

}