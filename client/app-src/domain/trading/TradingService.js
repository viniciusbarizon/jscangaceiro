import { HttpService } from '../../util/HttpService.js';
import { Trading } from './Trading.js';
import { ApplicationException } from '../../util/ApplicationException.js';

export class TradingService {
    constructor() {
        this._http = new HttpService();
    }

    getTradingsOfTheWeek() {
        return this._http
            .get('tradings/week')
            .then(
                data => data.map(object =>
                    new Trading(
                        new Date(object.date), object.quantity, object.value
                    ))
                ,
                err => {
                    throw new ApplicationException('It is not possible to get the current week tradings.');
                }
            );
    }

    getTradingsOfTheLastWeek() {
        return this._http
            .get('tradings/lastWeek')
            .then(
                data => data.map(object =>
                    new Trading(
                        new Date(object.date), object.quantity, object.value
                    ))
                ,
                err => {
                    throw new ApplicationException('It is not possible to get the last week tradings.');
                }
            );
    }

    getTradingsOfTheWeekBeforeLast() {
        return this._http
            .get('tradings/weekBeforeLast')
            .then(
                data => data.map(object =>
                    new Trading(
                        new Date(object.date), object.quantity, object.value
                    ))
                ,
                err => {
                    throw new ApplicationException(
                        'It is not possible to get the week before last tradings.');
                }
            );
    }

    async getTradingsFromThePeriod() {
        try {
            let period = await Promise.all([
                /*this.getTradingsOfTheWeek(),*/
                this.getTradingsOfTheLastWeek(),
                this.getTradingsOfTheWeekBeforeLast()
            ]);

            return period
                .reduce((newArray, item) => newArray.concat(item), [])
                .sort((a, b) => b.date.getTime() - a.date.getTime());
        }
        catch(err)
        {
            console.log(err);
            throw new ApplicationException('It is not possible to get the period tradings.');
        }
    }
}