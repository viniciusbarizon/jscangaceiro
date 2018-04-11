class Trading {
    constructor( date, quantity, value ) {
        this._date = date;
        this._quantity = quantity;
        this._value = value;
    }

    get volume () {
        return this._quantity * this._value;
    }

    get date () {
        return this._date;
    }

    get quantity () {
        return this._quantity;
    }

    get value () {
        return this._value;
    }
}