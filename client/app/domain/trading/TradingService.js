class TradingService {
    getTradingsOfTheWeek(cb) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'tradings/week');

        xhr.onreadystatechange = () => {
            if( xhr.readyState == 4 ) {
                if( xhr.status == 200) {
                    const tradings = JSON
                        .parse(xhr.responseText)
                        .map(object => new Trading(new Date(object.date), object.quantity, object.value));
                    
                    cb(null, tradings);
                }
                else {
                    console.log(xhr.responseText);
                    cb('It is not possible to get the weekly tradings.', null);
                }
            }
        };

        xhr.send();
    }
}