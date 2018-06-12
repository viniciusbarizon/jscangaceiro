System.register(['../../util/ApplicationException.js'], function (_export, _context) {
    "use strict";

    var ApplicationException;
    return {
        setters: [function (_utilApplicationExceptionJs) {
            ApplicationException = _utilApplicationExceptionJs.ApplicationException;
        }],
        execute: function () {
            class DateInvalidException extends ApplicationException {
                constructor() {
                    super('The date should be with the format dd/mm/aaaa.');
                }
            }

            _export('DateInvalidException', DateInvalidException);
        }
    };
});
//# sourceMappingURL=DateInvalidException.js.map