class TradingController {
    constructor() {
        // doing the bind, $ keep document as his context.
        const $ = document.querySelector.bind(document);

        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');

        this._tradings = new Tradings(model => {
            this._tradingsView.update(model);
        });

        this._tradingsView = new TradingsView('#tradings');

        // updating the view.
        this._tradingsView.update(this._tradings);

        this._message = new Message();
        this._messageView = new MessageView('#messageView');
        this._messageView.update(this._message);
    }

    add( event ) {
        event.preventDefault();

        this._tradings.add(this._create());

        this._message.text = 'Trading has been added with success';
        this._messageView.update(this._message);

        this.cleanForm();
    }

    cleanForm() {
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

        this._message.text = 'Tradings have been cleared with success';
        this._messageView.update(this._message)
    }
}