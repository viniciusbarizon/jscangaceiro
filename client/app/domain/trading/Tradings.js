System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let Tradings = class Tradings {
                constructor(trap) {
                    this._tradings = [];
                    Object.freeze(this);
                }

                add(trading) {
                    this._tradings.push(trading);
                }

                toArray() {
                    return [].concat(this._tradings);
                }

                get volumeTotal() {
                    return this._tradings.reduce((total, trading) => total + trading.volume, 0);
                }

                clear() {
                    this._tradings.length = 0;
                }
            };

            _export("Tradings", Tradings);
        }
    };
});
//# sourceMappingURL=Tradings.js.map