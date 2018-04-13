class TradingController {
    constructor() {
        // doing the bind, $ keep document as his context.
        let $ = document.querySelector.bind( document );

        this._inputDate = $( '#date' );
        this._inputQuantity = $( '#quantity' );
        this._inputValue = $( '#value' );
    }

    add( event ) {
        event.preventDefault();

        let date = new Date( this._inputDate.value.replace(/-/g, ',') );
        console.log(date);

        let trading = new Trading(
            new Date( this._inputDate.value.split('-') ),
            parseInt( this._inputQuantity.value ),
            parseFloat( this._inputValue.value )
        );
    }
}