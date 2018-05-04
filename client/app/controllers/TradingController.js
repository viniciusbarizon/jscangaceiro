class TradingController {
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
    }

    add( event ) {
        try {
            event.preventDefault();

            this._tradings.add(this._create());
            this._message.text = 'Trading has been added successfully.';
    
            this._cleanForm();
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
        this._tradings.clear();
        this._message.text = 'Tradings have been cleared successfully.';
    }
}