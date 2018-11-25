import { Tradings, TradingService, Trading } from '../domain/index.js';
import { TradingsView, MessageView, Message, DateConverter } from '../ui/index.js';

// importing the decorator.
import { getTradingDao, Bind, getExceptionMessage, debounce, controller } from '../util/index.js';

@controller( '#date', '#quantity', '#value' )
export class TradingController {
    constructor( _inputDate, _inputQuantity, _inputValue ) {
        Object.assign(this, { _inputDate, _inputQuantity, _inputValue } )

        this._tradings = new Bind(
            new Tradings(),
            new TradingsView('#tradings'),
            'add', 'clear'
        );

        this._message = new Bind(
            new Message(),
            new MessageView('#messageView'),
            'text'
        );

        this._service = new TradingService();

        // call the method for initialization.
        this._init();
    }

    async _init() {
        try {
            const dao = await getTradingDao();
            const tradings = await dao.listAll();
            tradings.forEach(trading => this._tradings.add(trading));
        }
        catch(err) {
            // err.message extracts only the exception error message.
            this._message.text = getExceptionMessage(err);
        }
    }

    @debounce()
    async add( event ) {
        try {
            event.preventDefault();

            // trading that we need to include in the Database and in the HTML table.
            const trading = this._create();

            const dao = await getTradingDao();
            await dao.add(trading);

            // will try to add in the HTML Table only if it was inserted in the Database.
            this._tradings.add(trading);
            this._message.text = 'Trading has been added successfully';

            this._cleanForm();
        }
        catch(err) {
            this._message.text = getExceptionMessage(err);
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
        return new Trading(
            DateConverter.toDate(this._inputDate.value),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        );
    }

    async clear() {
        try {
            const dao = await getTradingDao();
            await dao.clearAll();

            this._tradings.clear();
            this._message.text = 'Tradings have been cleared successfully.';
        }
        catch(err) {
            this._message.text = getExceptionMessage(err);
        }
    }

    @debounce(1500)
    async importTradings() {
        this._service
            .getTradingsFromThePeriod()
            .then(tradings => {
                tradings
                    .filter(newTrading => !this._tradings.toArray().some(existingTrading =>
                        newTrading.equals(existingTrading)
                    ))
                    .forEach(trading => this._tradings.add(trading))
                this._message.text = 'Tradings have been imported successfully';
            })
            .catch(err => this._message.text = err);
    }
}