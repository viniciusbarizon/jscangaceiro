System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let Trading = class Trading {
                constructor(_date, _quantity, _value) {
                    Object.assign(this, { _quantity, _value });
                    this._date = new Date(_date.getTime());
                    Object.freeze(this);
                }

                get volume() {
                    return this._quantity * this._value;
                }

                get date() {
                    return this._date;
                }

                get quantity() {
                    return this._quantity;
                }

                get value() {
                    return this._value;
                }

                equals(trading) {
                    return JSON.stringify(this) == JSON.stringify(trading);
                }
            };

            _export("Trading", Trading);
        }
    };
});
//# sourceMappingURL=Trading.js.map