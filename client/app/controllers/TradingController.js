System.register(['../domain/trading/Tradings.js', '../ui/views/TradingsView.js', '../ui/models/Message.js', '../ui/views/MessageView.js', '../domain/trading/TradingService.js', '../util/DaoFactory.js', '../ui/converters/DateInvalidException.js', '../domain/trading/Trading.js', '../util/Bind.js', '../ui/converters/DateConverter.js'], function (_export, _context) {
    "use strict";

    var Tradings, TradingsView, Message, MessageView, TradingService, getTradingDao, DateInvalidException, Trading, Bind, DateConverter;
    return {
        setters: [function (_domainTradingTradingsJs) {
            Tradings = _domainTradingTradingsJs.Tradings;
        }, function (_uiViewsTradingsViewJs) {
            TradingsView = _uiViewsTradingsViewJs.TradingsView;
        }, function (_uiModelsMessageJs) {
            Message = _uiModelsMessageJs.Message;
        }, function (_uiViewsMessageViewJs) {
            MessageView = _uiViewsMessageViewJs.MessageView;
        }, function (_domainTradingTradingServiceJs) {
            TradingService = _domainTradingTradingServiceJs.TradingService;
        }, function (_utilDaoFactoryJs) {
            getTradingDao = _utilDaoFactoryJs.getTradingDao;
        }, function (_uiConvertersDateInvalidExceptionJs) {
            DateInvalidException = _uiConvertersDateInvalidExceptionJs.DateInvalidException;
        }, function (_domainTradingTradingJs) {
            Trading = _domainTradingTradingJs.Trading;
        }, function (_utilBindJs) {
            Bind = _utilBindJs.Bind;
        }, function (_uiConvertersDateConverterJs) {
            DateConverter = _uiConvertersDateConverterJs.DateConverter;
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
                    getTradingDao().then(dao => dao.listAll()).then(tradings => tradings.forEach(trading => this._tradings.add(trading))).catch(err => this._message.text = err);
                }

                add(event) {
                    try {
                        event.preventDefault();

                        // trading that we need to include in the Database and in the HTML table.
                        const trading = this._create();

                        getTradingDao().then(dao => dao.add(trading)).then(() => {
                            // will try to add in the HTML Table only if it was inserted in the Database.
                            this._tradings.add(trading);
                            this._message.text = 'Trading has been added successfully';
                            this._cleanForm();
                        }).catch(err => this._message.text = err);
                    } catch (err) {
                        console.log(err);
                        console.log(err.stack);

                        if (err instanceof DateInvalidException) this._message.text = err.message;else this._message.text = 'An unexpected error happened. Please contact the support.';
                    }
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
                    getTradingDao().then(dao => dao.clearAll()).then(() => {
                        this._tradings.clear();
                        this._message.text = 'Tradings have been cleared successfully.';
                    });
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