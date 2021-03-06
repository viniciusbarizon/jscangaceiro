export function debounce(miliseconds = 500) {
    return function(target, key, descriptor) {
        const originalMethod = descriptor.value;

        let timer = 0;
        descriptor.value = function(...args) {
            if(event) event.preventDefault();
            
            clearTimeout(timer);
            
            // call originalMethod after X miliseconds.
            timer = setTimeout(() => originalMethod.apply(this, args), miliseconds);
        }

        return descriptor;
    }
}