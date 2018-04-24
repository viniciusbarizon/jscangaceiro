class Tradings {
    constructor(trap) {
        this._tradings = [];
        this._trap = trap;

        Object.freeze(this);
    }

    add(trading) {
        this._tradings.push(trading);
        this._trap(this);
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
        this._trap(this);
    }
}