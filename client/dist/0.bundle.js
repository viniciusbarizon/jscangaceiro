webpackJsonp([0],{

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradingService", function() { return TradingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Trading_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__ = __webpack_require__(4);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





let TradingService = class TradingService {
    constructor() {
        this._http = new __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__["a" /* HttpService */]();
    }

    getTradingsOfTheWeek() {
        return this._http.get('http://localhost:3000/tradings/week').then(data => data.map(object => new __WEBPACK_IMPORTED_MODULE_1__Trading_js__["a" /* Trading */](new Date(object.date), object.quantity, object.value)), err => {
            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('It is not possible to get the current week tradings.');
        });
    }

    getTradingsOfTheLastWeek() {
        return this._http.get('http://localhost:3000/tradings/lastWeek').then(data => data.map(object => new __WEBPACK_IMPORTED_MODULE_1__Trading_js__["a" /* Trading */](new Date(object.date), object.quantity, object.value)), err => {
            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('It is not possible to get the last week tradings.');
        });
    }

    getTradingsOfTheWeekBeforeLast() {
        return this._http.get('http://localhost:3000/tradings/weekBeforeLast').then(data => data.map(object => new __WEBPACK_IMPORTED_MODULE_1__Trading_js__["a" /* Trading */](new Date(object.date), object.quantity, object.value)), err => {
            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('It is not possible to get the week before last tradings.');
        });
    }

    getTradingsFromThePeriod() {
        var _this = this;

        return _asyncToGenerator(function* () {
            try {
                let period = yield Promise.all([
                /*this.getTradingsOfTheWeek(),*/
                _this.getTradingsOfTheLastWeek(), _this.getTradingsOfTheWeekBeforeLast()]);

                return period.reduce(function (newArray, item) {
                    return newArray.concat(item);
                }, []).sort(function (a, b) {
                    return b.date.getTime() - a.date.getTime();
                });
            } catch (err) {
                console.log(err);
                throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('It is not possible to get the period tradings.');
            }
        })();
    }
};

/***/ })

});