System.register(['../domain/index.js', '../ui/index.js', '../util/index.js'], function (_export, _context) {
    "use strict";

    var Tradings, TradingService, Trading, TradingsView, MessageView, Message, DateConverter, getTradingDao, Bind, getExceptionMessage, debounce, controller, bindEvent;
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
            debounce = _utilIndexJs.debounce;
            controller = _utilIndexJs.controller;
            bindEvent = _utilIndexJs.bindEvent;
        }],
        execute: function () {
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

            var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

            let TradingController = (_dec = controller('#date', '#quantity', '#value'), _dec2 = bindEvent('submit', '.form'), _dec3 = debounce(), _dec4 = bindEvent('click', '#button-clear'), _dec5 = bindEvent('click', '#button-import'), _dec6 = debounce(1500), _dec(_class = (_class2 = class TradingController {
                constructor(_inputDate, _inputQuantity, _inputValue) {
                    Object.assign(this, { _inputDate, _inputQuantity, _inputValue });

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

            _export('TradingController', TradingController);
        }
    };
});
//# sourceMappingURL=TradingController.js.map