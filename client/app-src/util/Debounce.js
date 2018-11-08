export function debounce(fn, milliseconds) {
    // save the ID of a timer, 0 means that does not have.
    let timer = 0;    

    return () => {
        clearTimeout(timer);

        // use a timer to call fn() after of many milliseconds.
        timer = setTimeout(() => fn(), milliseconds);
    }
}