System.register([], function (_export, _context) {
    "use strict";

    function required(parameter) {
        throw new Error(`${parameter} is a required parameter`);
    }

    _export("required", required);

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=Required.js.map