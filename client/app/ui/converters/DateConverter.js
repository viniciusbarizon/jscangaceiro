import { DateInvalidException } from './DateInvalidException.js';

export class DateConverter {
    constructor() {
        throw new Error('This class can not be instantiated');
    }

    static toText(date) {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }

    static toDate(text) {
        if(!/\d{2}\/\d{2}\/\d{4}/.test(text))
            throw new DateInvalidException();

        return new Date(...text
            .split('/')
            .reverse()
            .map( ( item, index ) => item - index % 2 )
        );
    }
}