class TradingController {
    constructor() {
        // doing the bind, $ keep document as his context.
        let $ = document.querySelector.bind(document);

        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');

        this._tradings = new Tradings();

        this._tradingsView = new TradingsView('#tradings');

        // updating the view.
        this._tradingsView.update(this._tradings);
    }

    add( event ) {
        event.preventDefault();

        this._tradings.add(this._create());
        this._tradingsView.update(this._tradings);

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
}