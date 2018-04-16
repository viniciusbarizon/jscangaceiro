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

        let trading = new Trading(
            DateConverter.toDate( this._inputDate.value ),
            parseInt( this._inputQuantity.value ),
            parseFloat( this._inputValue.value )
        );
        console.log(trading);

        let dayMonthYear = DateConverter.toText( trading.date );
        console.log( dayMonthYear );
    }
}