System.register(['../../util/HttpService.js', './Trading.js', '../../util/ApplicationException.js'], function (_export, _context) {
    "use strict";

    var HttpService, Trading, ApplicationException;

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    return {
        setters: [function (_utilHttpServiceJs) {
            HttpService = _utilHttpServiceJs.HttpService;
        }, function (_TradingJs) {
            Trading = _TradingJs.Trading;
        }, function (_utilApplicationExceptionJs) {
            ApplicationException = _utilApplicationExceptionJs.ApplicationException;
        }],
        execute: function () {
            class TradingService {
                constructor() {
                    this._http = new HttpService();
                }

                getTradingsOfTheWeek() {
                    return this._http.get('tradings/week').then(data => data.map(object => new Trading(new Date(object.date), object.quantity, object.value)), err => {
                        throw new ApplicationException('It is not possible to get the current week tradings.');
                    });
                }

                getTradingsOfTheLastWeek() {
                    return this._http.get('tradings/lastWeek').then(data => data.map(object => new Trading(new Date(object.date), object.quantity, object.value)), err => {
                        throw new ApplicationException('It is not possible to get the last week tradings.');
                    });
                }

                getTradingsOfTheWeekBeforeLast() {
                    return this._http.get('tradings/weekBeforeLast').then(data => data.map(object => new Trading(new Date(object.date), object.quantity, object.value)), err => {
                        throw new ApplicationException('It is not possible to get the week before last tradings.');
                    });
                }

                getTradingsFromThePeriod() {
                    var _this = this;

                    return _asyncToGenerator(function* () {
                        try {
                            let period = yield Promise.all([_this.getTradingsOfTheWeek(), _this.getTradingsOfTheLastWeek(), _this.getTradingsOfTheWeekBeforeLast()]);

                            return period.reduce(function (newArray, item) {
                                return newArray.concat(item);
                            }, []).sort(function (a, b) {
                                return b.date.getTime() - a.date.getTime();
                            });
                        } catch (err) {
                            console.log(err);
                            throw new ApplicationException('It is not possible to get the period tradings.');
                        }
                    })();
                }
            }

            _export('TradingService', TradingService);
        }
    };
});
//# sourceMappingURL=TradingService.js.map