System.register(['../domain/index.js', '../ui/index.js', '../util/index.js'], function (_export, _context) {
    "use strict";

    var Tradings, TradingService, Trading, TradingsView, MessageView, Message, DateConverter, getTradingDao, Bind, getExceptionMessage;

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
        setters: [function (_domainIndexJs) {
            Tradings = _domainIndexJs.Tradings;
            TradingService = _domainIndexJs.TradingService;
            Trading = _domainIndexJs.Trading;
        }, function (_uiIndexJs) {
            TradingsView = _uiIndexJs.TradingsView;
            MessageView = _uiIndexJs.MessageView;
            Message = _uiIndexJs.Message;
            DateConverter = _uiIndexJs.DateConverter;
        }, function (_utilIndexJs) {
            getTradingDao = _utilIndexJs.getTradingDao;
            Bind = _utilIndexJs.Bind;
            getExceptionMessage = _utilIndexJs.getExceptionMessage;
        }],
        execute: function () {
            class TradingController {
                constructor() {
                    // doing the bind, $ keep document as his context.
                    const $ = document.querySelector.bind(document);

                    this._inputDate = $('#date');
                    this._inputQuantity = $('#quantity');
                    this._inputValue = $('#value');

                    this._tradings = new Bind(new Tradings(), new TradingsView('#tradings'), 'add', 'clear');

                    this._message = new Bind(new Message(), new MessageView('#messageView'), 'text');

                    this._service = new TradingService();

                    // call the method for initialization.
                    this._init();
                }

                _init() {
                    var _this = this;

                    return _asyncToGenerator(function* () {
                        try {
                            const dao = yield getTradingDao();
                            const tradings = yield dao.listAll();
                            tradings.forEach(function (trading) {
                                return _this._tradings.add(trading);
                            });
                        } catch (err) {
                            // err.message extracts only the exception error message.
                            _this._message.text = getExceptionMessage(err);
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

                            const dao = yield getTradingDao();
                            yield dao.add(trading);

                            // will try to add in the HTML Table only if it was inserted in the Database.
                            _this2._tradings.add(trading);
                            _this2._message.text = 'Trading has been added successfully';

                            _this2._cleanForm();
                        } catch (err) {
                            _this2._message.text = getExceptionMessage(err);
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
                    return new Trading(DateConverter.toDate(this._inputDate.value), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
                }

                clear() {
                    var _this3 = this;

                    return _asyncToGenerator(function* () {
                        try {
                            const dao = yield getTradingDao();
                            yield dao.clearAll();

                            _this3._tradings.clear();
                            _this3._message.text = 'Tradings have been cleared successfully.';
                        } catch (err) {
                            _this3._message.text = getExceptionMessage(err);
                        }
                    })();
                }

                importTradings() {
                    this._service.getTradingsFromThePeriod().then(tradings => {
                        tradings.filter(newTrading => !this._tradings.toArray().some(existingTrading => newTrading.equals(existingTrading))).forEach(trading => this._tradings.add(trading));
                        this._message.text = 'Tradings have been imported successfully';
                    }).catch(err => this._message.text = err);
                }
            }

            _export('TradingController', TradingController);
        }
    };
});
//# sourceMappingURL=TradingController.js.map