class TradingDao {
    constructor(connection) {
        this._connection = connection;
        this._store = 'tradings';
    }

    add(trading) {
        return new Promise((resolve, reject) => {
            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(trading);

            request.onsuccess = e => resolve();
            request.onerror = e => {
                console.log(e.target.error);
                reject('It was not possible to save the trading');
            }
        });
    }

    listAll() {
        return new Promise((resolve, reject) => {
            const tradings = [];

            const cursor = this._connection
                .transaction([this._store],'readwrite')
                .objectStore(this._store)
                .openCursor();

            cursor.onsuccess = e => {
                const current = e.target.result;

                if(current) {
                    const trading = new Trading(
                        current.value._date,
                        current.value._quantity,
                        current.value._value
                    );

                    tradings.push(trading);
                    current.continue();
                }
                else {
                    resolve(tradings);
                }
            };

            cursor.onerror = e => {
                console.log(e.target.error);
                reject('It was not possible to list the tradings');
            }
        });
    }

    clearAll() {
        return new Promise((resolve, reject) => {
            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

            request.onsuccess = e => resolve();

            request.onerror = e => {
                console.log(e.target.error);
                reject('It was not possible to delete the tradings');
            };
        })
    }
}