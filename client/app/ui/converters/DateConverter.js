System.register(['./DateInvalidException.js'], function (_export, _context) {
    "use strict";

    var DateInvalidException;
    return {
        setters: [function (_DateInvalidExceptionJs) {
            DateInvalidException = _DateInvalidExceptionJs.DateInvalidException;
        }],
        execute: function () {
            let DateConverter = class DateConverter {
                constructor() {
                    throw new Error('This class can not be instantiated');
                }

                static toText(date) {
                    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                }

                static toDate(text) {
                    if (!/\d{2}\/\d{2}\/\d{4}/.test(text)) throw new DateInvalidException();

                    return new Date(...text.split('/').reverse().map((item, index) => item - index % 2));
                }
            };

            _export('DateConverter', DateConverter);
        }
    };
});
//# sourceMappingURL=DateConverter.js.map