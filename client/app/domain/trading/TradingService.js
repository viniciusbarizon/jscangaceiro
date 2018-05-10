class TradingService {
    constructor() {
        this._http = new HttpService();
    }

    getTradingsOfTheWeek() {
        return this._http
            .get('tradings/week')
            .then(
                data => {
                    const tradings = data.map(object => new Trading(
                        new Date(object.date), object.quantity, object.value
                    ));

                    return tradings;
                },
                err => {
                    throw new Error('It is not possible to get the current week tradings.');
                }
            );
    }

    getTradingsOfTheLastWeek() {
        return this._http
            .get('tradings/lastWeek')
            .then(
                data => {
                    const tradings = data.map(object => new Trading(
                        new Date(object.date), object.quantity, object.value
                    ));

                    return tradings;
                },
                err => {
                    throw new Error('It is not possible to get the last week tradings.');
                }
            );
    }

    getTradingsOfTheWeekBeforeLast() {
        return this._http
            .get('tradings/weekBeforeLast')
            .then(
                data => {
                    const tradings = data.map(object => new Trading(
                        new Date(object.date), object.quantity, object.value
                    ));

                    return tradings;
                },
                err => {
                    throw new Error('It is not possible to get the week before last tradings.');
                }
            );
    }

    getTradingsFromThePeriod() {
        return Promise.all([
            this.getTradingsOfTheWeek(),
            this.getTradingsOfTheLastWeek(),
            this.getTradingsOfTheWeekBeforeLast()
        ])
        .then(period => {
            return period
                .reduce((newArray, item) => newArray.concat(item), [])
        })
        .catch(err => {
            console.log(err);
            throw new Error('It is not possible to get the period tradings.');
        });
    }
}