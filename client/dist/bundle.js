/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index_js__ = __webpack_require__(1);


let Trading = class Trading {
    constructor(_date = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* required */]('date'), _quantity = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* required */]('quantity'), _value = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* required */]('value')) {
        Object.assign(this, { _quantity, _value });
        this._date = new Date(_date.getTime());
        Object.freeze(this);
    }

    get volume() {
        return this._quantity * this._value;
    }

    get date() {
        return this._date;
    }

    get quantity() {
        return this._quantity;
    }

    get value() {
        return this._value;
    }

    equals(trading) {
        return JSON.stringify(this) == JSON.stringify(trading);
    }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bind_js__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Bind_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConnectionFactory_js__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DaoFactory_js__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__DaoFactory_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ApplicationException_js__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__ApplicationException_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__HttpService_js__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProxyFactory_js__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__decorators_Debounce_js__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__decorators_Debounce_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__decorators_Controller_js__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__decorators_Controller_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Required_js__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__Required_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__decorators_BindEvent_js__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__decorators_BindEvent_js__["a"]; });











/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationException; });
/* unused harmony export isApplicationException */
/* harmony export (immutable) */ __webpack_exports__["b"] = getExceptionMessage;
let ApplicationException = class ApplicationException extends Error {
    constructor(msg = '') {
        super(msg);
        this.name = this.constructor.name;
    }
};

const exception = ApplicationException;

function isApplicationException(err) {
    return err instanceof exception || Object.getPrototypeOf(err) instanceof exception;
}

function getExceptionMessage(err) {
    if (isApplicationException(err)) {
        return err.message;
    } else {
        console.log(err);
        return 'It was impossible to do the operation.';
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
let View = class View {
    constructor(seletor) {
        this._element = document.querySelector(seletor);
    }

    // get the model.
    update(model) {
        this._element.innerHTML = this.template(model);
    }

    template(model) {
        throw new Error('You must implement the method template.');
    }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trading_Trading_js__ = __webpack_require__(0);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__trading_Trading_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trading_TradingDao_js__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trading_TradingService_js__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__trading_TradingService_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trading_Tradings_js__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__trading_Tradings_js__["a"]; });





/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyFactory; });
let ProxyFactory = class ProxyFactory {
    static create(object, props, trap) {
        return new Proxy(object, {
            get(target, prop, receiver) {
                if (ProxyFactory._isFunction(target[prop]) && props.includes(prop)) return function () {
                    console.log(`"${prop}" triggered the trap.`);
                    target[prop].apply(target, arguments);

                    // runs the trap that gets the original object.
                    trap(target);
                };

                return target[prop];
            },

            set(target, prop, value, receiver) {
                const updated = Reflect.set(target, prop, value);

                if (props.includes(prop)) trap(target);

                return updated;
            }
        });
    }

    static _isFunction(fn) {
        return typeof fn == typeof Function;
    }
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionFactory; });
const stores = ['tradings'];

// starts without connection.
let connection = null;

// variable with the original function.
let close = null;

// returns the class.
let ConnectionFactory = class ConnectionFactory {
    constructor() {
        throw new Error('Não é possível criar instâncias dessa classe');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {
            if (connection) return resolve(connection);

            const openRequest = indexedDB.open('jscangaceiro', 4);

            openRequest.onupgradeneeded = e => {
                // pass the connection to the method.
                ConnectionFactory._createStores(e.target.result);
            };

            openRequest.onsuccess = e => {
                // pass the result (connection) to the promise! Only will be ran one time.
                connection = e.target.result;

                // saving the original function.
                close = connection.close.bind(connection);

                connection.close = () => {
                    throw new Error('You can not close directly the connection.');
                };

                resolve(connection);
            };

            openRequest.onerror = e => {
                console.log(e.target.error);
                // pass the error to the promise reject!
                reject(e.target.error.name);
            };
        });
    }

    static _createStores(connection) {
        // iterate in the array to build the stores.
        stores.forEach(store => {
            if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);

            connection.createObjectStore(store, { autoIncrement: true });
        });
    }

    static closeConnection() {
        if (connection) close(); // calling the original close.
    }
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradingDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Trading_js__ = __webpack_require__(0);


let TradingDao = class TradingDao {
    constructor(connection) {
        this._connection = connection;
        this._store = 'tradings';
    }

    add(trading) {
        return new Promise((resolve, reject) => {
            const request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).add(trading);

            request.onsuccess = e => resolve();
            request.onerror = e => {
                console.log(e.target.error);
                reject('It was not possible to save the trading');
            };
        });
    }

    listAll() {
        return new Promise((resolve, reject) => {
            const tradings = [];

            const cursor = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).openCursor();

            cursor.onsuccess = e => {
                const current = e.target.result;

                if (current) {
                    const trading = new __WEBPACK_IMPORTED_MODULE_0__Trading_js__["a" /* Trading */](current.value._date, current.value._quantity, current.value._value);

                    tradings.push(trading);
                    current.continue();
                } else {
                    resolve(tradings);
                }
            };

            cursor.onerror = e => {
                console.log(e.target.error);
                reject('It was not possible to list the tradings');
            };
        });
    }

    clearAll() {
        return new Promise((resolve, reject) => {
            const request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).clear();

            request.onsuccess = e => resolve();

            request.onerror = e => {
                console.log(e.target.error);
                reject('It was not possible to delete the tradings');
            };
        });
    }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
let HttpService = class HttpService {
    _handleErrors(res) {
        // if res not ok, throw an exception.
        if (!res.ok) throw new Error(res.statusText);

        return res;
    }

    get(url) {
        return fetch(url).then(res => this._handleErrors(res)).then(res => res.json());
    }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateConverter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DateInvalidException_js__ = __webpack_require__(10);


let DateConverter = class DateConverter {
    constructor() {
        throw new Error('This class can not be instantiated');
    }

    static toText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    static toDate(text) {
        if (!/\d{2}\/\d{2}\/\d{4}/.test(text)) throw new __WEBPACK_IMPORTED_MODULE_0__DateInvalidException_js__["a" /* DateInvalidException */]();

        return new Date(...text.split('/').reverse().map((item, index) => item - index % 2));
    }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateInvalidException; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ApplicationException_js__ = __webpack_require__(2);


let DateInvalidException = class DateInvalidException extends __WEBPACK_IMPORTED_MODULE_0__util_ApplicationException_js__["a" /* ApplicationException */] {
    constructor() {
        super('The date should be with the format dd/mm/aaaa.');
    }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_TradingController_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_index_js__ = __webpack_require__(4);




// creating the controller instance.
const controller = new __WEBPACK_IMPORTED_MODULE_0__controllers_TradingController_js__["a" /* TradingController */]();

const trading = new __WEBPACK_IMPORTED_MODULE_1__domain_index_js__["a" /* Trading */](new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');

const body = JSON.stringify(trading);
console.log(body);
const method = 'POST';

const config = {
    method,
    headers,
    body
};

fetch('/tradings', config).then(() => console.log('Data has been sent successfully'));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradingController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_index_js__ = __webpack_require__(1);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}




// importing the decorator.


let TradingController = (_dec = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["c" /* controller */]('#date', '#quantity', '#value'), _dec2 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["b" /* bindEvent */]('submit', '.form'), _dec3 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["d" /* debounce */](), _dec4 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["b" /* bindEvent */]('click', '#button-clear'), _dec5 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["b" /* bindEvent */]('click', '#button-import'), _dec6 = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["d" /* debounce */](1500), _dec(_class = (_class2 = class TradingController {
    constructor(_inputDate, _inputQuantity, _inputValue) {
        Object.assign(this, { _inputDate, _inputQuantity, _inputValue });

        this._tradings = new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["a" /* Bind */](new __WEBPACK_IMPORTED_MODULE_0__domain_index_js__["c" /* Tradings */](), new __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["d" /* TradingsView */]('#tradings'), 'add', 'clear');

        this._message = new __WEBPACK_IMPORTED_MODULE_2__util_index_js__["a" /* Bind */](new __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["b" /* Message */](), new __WEBPACK_IMPORTED_MODULE_1__ui_index_js__["c" /* MessageView */]('#messageView'), 'text');

        this._service = new __WEBPACK_IMPORTED_MODULE_0__domain_index_js__["b" /* TradingService */]();

        // call the method for initialization.
        this._init();
    }

    _init() {
        var _this = this;

        return _asyncToGenerator(function* () {
            try {
                const dao = yield __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getTradingDao */]();
                const tradings = yield dao.listAll();
                tradings.forEach(function (trading) {
                    return _this._tradings.add(trading);
                });
            } catch (err) {
                // err.message extracts only the exception error message.
                _this._message.text = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["e" /* getExceptionMessage */](err);
            }
        })();
    }

    add(event) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            try {
                event.preventDefault();

                // trading that we need to include in the Database and in the HTML table.
                const trading = _this2._create();

                const dao = yield __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getTradingDao */]();
                yield dao.add(trading);

                // will try to add in the HTML Table only if it was inserted in the Database.
                _this2._tradings.add(trading);
                _this2._message.text = 'Trading has been added successfully';

                _this2._cleanForm();
            } catch (err) {
                _this2._message.text = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["e" /* getExceptionMessage */](err);
            }
        })();
    }

    _cleanForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;

        this._inputDate.focus();
    }

    _create() {
        // returns a new Trading instance.
        return new __WEBPACK_IMPORTED_MODULE_0__domain_index_js__["a" /* Trading */](__WEBPACK_IMPORTED_MODULE_1__ui_index_js__["a" /* DateConverter */].toDate(this._inputDate.value), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
    }

    clear() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            try {
                const dao = yield __WEBPACK_IMPORTED_MODULE_2__util_index_js__["f" /* getTradingDao */]();
                yield dao.clearAll();

                _this3._tradings.clear();
                _this3._message.text = 'Tradings have been cleared successfully.';
            } catch (err) {
                _this3._message.text = __WEBPACK_IMPORTED_MODULE_2__util_index_js__["e" /* getExceptionMessage */](err);
            }
        })();
    }

    importTradings() {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            _this4._service.getTradingsFromThePeriod().then(function (tradings) {
                tradings.filter(function (newTrading) {
                    return !_this4._tradings.toArray().some(function (existingTrading) {
                        return newTrading.equals(existingTrading);
                    });
                }).forEach(function (trading) {
                    return _this4._tradings.add(trading);
                });
                _this4._message.text = 'Tradings have been imported successfully';
            }).catch(function (err) {
                return _this4._message.text = err;
            });
        })();
    }
}, (_applyDecoratedDescriptor(_class2.prototype, 'add', [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'add'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'clear', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'clear'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'importTradings', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'importTradings'), _class2.prototype)), _class2)) || _class);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bind; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProxyFactory_js__ = __webpack_require__(5);


let Bind = class Bind {
    constructor(model, view, ...props) {
        const proxy = __WEBPACK_IMPORTED_MODULE_0__ProxyFactory_js__["a" /* ProxyFactory */].create(model, props, model => {
            view.update(model);
        });

        // view.update(model);
        return proxy;
    }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTradingDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnectionFactory_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_trading_TradingDao_js__ = __webpack_require__(7);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




let getTradingDao = (() => {
    var _ref = _asyncToGenerator(function* () {
        let conn = yield __WEBPACK_IMPORTED_MODULE_0__ConnectionFactory_js__["a" /* ConnectionFactory */].getConnection();
        return new __WEBPACK_IMPORTED_MODULE_1__domain_trading_TradingDao_js__["a" /* TradingDao */](conn);
    });

    return function getTradingDao() {
        return _ref.apply(this, arguments);
    };
})();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(miliseconds = 500) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;

        let timer = 0;
        descriptor.value = function (...args) {
            if (event) event.preventDefault();

            clearTimeout(timer);

            // call originalMethod after X miliseconds.
            timer = setTimeout(() => originalMethod.apply(this, args), miliseconds);
        };

        return descriptor;
    };
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = controller;
function controller(...selectors) {
    // DOM elements list.
    const elements = selectors.map(selector => document.querySelector(selector));

    return function (constructor) {
        const originalConstructor = constructor;

        const newConstructor = function () {
            return new originalConstructor(...elements);
        };

        // adjusting the prototype.
        newConstructor.prototype = originalConstructor.prototype;

        return newConstructor;
    };
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = required;
function required(parameter) {
    throw new Error(`${parameter} is a required parameter`);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index_js__ = __webpack_require__(1);


function bindEvent(event = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* required */]('event'), selector = __WEBPACK_IMPORTED_MODULE_0__util_index_js__["g" /* required */]('selector'), prevent = true) {

    return function (target, propertyKey, descriptor) {
        // we must add the metadata here.
        Reflect.defineMetadata('bindEvent', { event, selector, prevent, propertyKey }, Object.getPrototypeOf(target), propertyKey);

        return descriptor;
    };
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Trading_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__ = __webpack_require__(2);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





let TradingService = class TradingService {
    constructor() {
        this._http = new __WEBPACK_IMPORTED_MODULE_0__util_HttpService_js__["a" /* HttpService */]();
    }

    getTradingsOfTheWeek() {
        return this._http.get('tradings/week').then(data => data.map(object => new __WEBPACK_IMPORTED_MODULE_1__Trading_js__["a" /* Trading */](new Date(object.date), object.quantity, object.value)), err => {
            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('It is not possible to get the current week tradings.');
        });
    }

    getTradingsOfTheLastWeek() {
        return this._http.get('tradings/lastWeek').then(data => data.map(object => new __WEBPACK_IMPORTED_MODULE_1__Trading_js__["a" /* Trading */](new Date(object.date), object.quantity, object.value)), err => {
            throw new __WEBPACK_IMPORTED_MODULE_2__util_ApplicationException_js__["a" /* ApplicationException */]('It is not possible to get the last week tradings.');
        });
    }

    getTradingsOfTheWeekBeforeLast() {
        return this._http.get('tradings/weekBeforeLast').then(data => data.map(object => new __WEBPACK_IMPORTED_MODULE_1__Trading_js__["a" /* Trading */](new Date(object.date), object.quantity, object.value)), err => {
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

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tradings; });
let Tradings = class Tradings {
    constructor(trap) {
        this._tradings = [];
        Object.freeze(this);
    }

    add(trading) {
        this._tradings.push(trading);
    }

    toArray() {
        return [].concat(this._tradings);
    }

    get volumeTotal() {
        return this._tradings.reduce((total, trading) => total + trading.volume, 0);
    }

    clear() {
        this._tradings.length = 0;
    }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_MessageView_js__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__views_MessageView_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_TradingsView_js__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__views_TradingsView_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_View_js__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Message_js__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__models_Message_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__converters_DateInvalidException_js__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__converters_DateConverter_js__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__converters_DateConverter_js__["a"]; });







/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(3);


let MessageView = class MessageView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* View */] {
    template(model) {
        return model.text ? `<p class="alert alert-info">${model.text}</p>` : `<p></p>`;
    }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradingsView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__converters_DateConverter_js__ = __webpack_require__(9);



let TradingsView = class TradingsView extends __WEBPACK_IMPORTED_MODULE_0__View_js__["a" /* View */] {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </thead>

            <tbody>
                ${model.toArray().map(trading => `
                    <tr>
                        <td>${__WEBPACK_IMPORTED_MODULE_1__converters_DateConverter_js__["a" /* DateConverter */].toText(trading.date)}</td>
                        <td>${trading.quantity}</td>
                        <td>${trading.value}</td>
                        <td>${trading.volume}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${model.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>`;
    }
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
let Message = class Message {
    constructor(text = '') {
        this._text = text;
    }

    get text() {
        return this._text;
    }

    set text(text) {
        this._text = text;
    }
};

/***/ })
/******/ ]);