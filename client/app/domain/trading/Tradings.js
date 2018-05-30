export class Tradings {
    constructor(trap) {
        this._tradings = [];
        Object.freeze(this);
    }

    add(trading) {
        this._tradings.push(trading);
    }

    toArray() {
        return [].concat( this._tradings );
    }

    get volumeTotal() {
        return this._tradings
            .reduce( (total, trading) => 
                total + trading.volume, 0);
    }

    clear() {
        this._tradings.length = 0;
    }
}