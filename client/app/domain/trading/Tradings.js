class Tradings {
    constructor() {
        this._tradings = [];
    }

    add(trading) {
        this._tradings.push(trading);
    }

    toArray() {
        return [].concat( this._tradings );
    }
}