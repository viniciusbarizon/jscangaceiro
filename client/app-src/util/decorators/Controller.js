export function controller(...selectors) {
    // DOM elements list.
    const elements = selectors.map(selector =>
        document.querySelector(selector));

    return function(constructor) {
        const originalConstructor = constructor;

        const newConstructor = function() {
            return new originalConstructor(...elements);
        }

        // adjusting the prototype.
        newConstructor.prototype = originalConstructor.prototype;

        return newConstructor;
    }
}