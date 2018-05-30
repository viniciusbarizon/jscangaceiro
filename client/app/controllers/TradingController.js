import { Tradings } from '../domain/trading/Tradings.js';
import { TradingsView } from '../ui/views/TradingsView.js';
import { Message } from '../ui/models/Message.js';
import { MessageView } from '../ui/views/MessageView.js';
import { TradingService } from '../domain/trading/TradingService.js';
import { getTradingDao } from '../util/DaoFactory.js';
import { DateInvalidException } from '../ui/converters/DateInvalidException.js';
import { Trading } from '../domain/trading/Trading.js';
import { Bind } from '../util/Bind.js';
import { DateConverter } from '../ui/converters/DateConverter.js';

export class TradingController {
    constructor() {
        // doing the bind, $ keep document as his context.
        const $ = document.querySelector.bind(document);

        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');

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

    _init() {
        getTradingDao()
        .then(dao => dao.listAll())
        .then(tradings =>
            tradings.forEach(trading =>
                this._tradings.add(trading)))
        .catch(err => this._message.text = err);
    }

    add( event ) {
        try {
            event.preventDefault();

            // trading that we need to include in the Database and in the HTML table.
            const trading = this._create();

            getTradingDao()
            .then(dao => dao.add(trading))
            .then(() => {
                // will try to add in the HTML Table only if it was inserted in the Database.
                this._tradings.add(trading);
                this._message.text = 'Trading has been added successfully';
                this._cleanForm();
            })
            .catch(err => this._message.text = err);
        }
        catch(err) {
            console.log(err);
            console.log(err.stack);

            if(err instanceof DateInvalidException )
                this._message.text = err.message;
            else
                this._message.text = 'An unexpected error happened. Please contact the support.';
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

    clear() {
            getTradingDao()
            .then(dao => dao.clearAll())
            .then(() => {
                this._tradings.clear();
                this._message.text = 'Tradings have been cleared successfully.';
            });
    }

    importTradings() {
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