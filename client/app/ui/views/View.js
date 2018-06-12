System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class View {
                constructor(seletor) {
                    this._element = document.querySelector(seletor);
                }

                // get the model.
                update(model) {
                    this._element.innerHTML = this.template(model);
                }

                template(model) {
                    throw new Error('You must implement the method template.');
                }
            }

            _export('View', View);
        }
    };
});
//# sourceMappingURL=View.js.map