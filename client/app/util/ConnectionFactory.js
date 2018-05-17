const stores = ['tradings'];

class ConnectionFactory {
    constructor() {
        throw new Error('Não é possível criar instâncias dessa classe');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {
            const openRequest = indexedDB.open('jscangaceiro', 3);

            openRequest.onupgradeneeded = e => {
                // pass the connection to the method.
                ConnectionFactory._createStores(e.target.result);
            };

            openRequest.onsuccess = e => {
                // pass the result (connection) to the promise!
                resolve(e.target.result);
            };

            openRequest.onerror = e => {
                console.log(e.target.error);
                // pass the error to the promise reject!
                reject(e.target.error.name);
            };
        });
    }

    static _createStores(connection) {
        // iterate in the array to build the stores.
        store.forEach(store => {
            if(connection.objectStoreNames.contains(store))
                connection.deleteObjectStore(store);
            
            connection.createObjectStore(store, {autoIncrement: true});
        });
    }
}