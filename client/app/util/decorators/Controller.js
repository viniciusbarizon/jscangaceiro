System.register([], function (_export, _context) {
    "use strict";

    function controller(...selectors) {
        // DOM elements list.
        const elements = selectors.map(selector => document.querySelector(selector));

        return function (constructor) {
            const originalConstructor = constructor;

            const newConstructor = function () {
                const instance = new originalConstructor(...elements);

                Object
                    .getOwnPropertyNames(originalConstructor.prototype)
                    .forEach(property => {
                        if(Reflect.hasMetadata('bindEvent', instance, property)) {
                            connectEvent(instance, Reflect.getMetadata('bindEvent', instance, property));
                        }
                    });
                newConstructor.prototype = originalConstructor.prototype;

                return newConstructor;
            };

            // adjusting the prototype.
            newConstructor.prototype = originalConstructor.prototype;

            return newConstructor;
        };

        function connectEvent(instance, metadata) {
            document
                .querySelector(metadata.selector)
                .addEventListener(metadata.event, event => {
                    if(metadata.event) event.preventDefault();
                    instance[metadata.propertyKey](event)
                });
        }
    }

    _export("controller", controller);

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=Controller.js.map