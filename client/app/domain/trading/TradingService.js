System.register(['../../util/HttpService.js', './Trading.js'], function (_export, _context) {
    "use strict";

    var HttpService, Trading;
    return {
        setters: [function (_utilHttpServiceJs) {
            HttpService = _utilHttpServiceJs.HttpService;
        }, function (_TradingJs) {
            Trading = _TradingJs.Trading;
        }],
        execute: function () {
            class TradingService {
                constructor() {
                    this._http = new HttpService();
                }

                getTradingsOfTheWeek() {
                    return this._http.get('tradings/week').then(data => data.map(object => new Trading(new Date(object.date), object.quantity, object.value)), err => {
                        throw new Error('It is not possible to get the current week tradings.');
                    });
                }

                getTradingsOfTheLastWeek() {
                    return this._http.get('tradings/lastWeek').then(data => data.map(object => new Trading(new Date(object.date), object.quantity, object.value)), err => {
                        throw new Error('It is not possible to get the last week tradings.');
                    });
                }

                getTradingsOfTheWeekBeforeLast() {
                    return this._http.get('tradings/weekBeforeLast').then(data => data.map(object => new Trading(new Date(object.date), object.quantity, object.value)), err => {
                        throw new Error('It is not possible to get the week before last tradings.');
                    });
                }

                getTradingsFromThePeriod() {
                    return Promise.all([this.getTradingsOfTheWeek(), this.getTradingsOfTheLastWeek(), this.getTradingsOfTheWeekBeforeLast()]).then(period => period.reduce((newArray, item) => newArray.concat(item), []).sort((a, b) => b.date.getTime() - a.date.getTime())).catch(err => {
                        console.log(err);
                        throw new Error('It is not possible to get the period tradings.');
                    });
                }
            }

            _export('TradingService', TradingService);
        }
    };
});
//# sourceMappingURL=TradingService.js.map