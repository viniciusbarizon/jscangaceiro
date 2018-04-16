class DateConverter {
    constructor() {
        throw new Error('This class can not be instantiated');
    }

    static toText(date) {
        return date.getDate() + '/' +  (date.getMonth() + 1) + '/' + date.getFullYear();
    }

    static toDate(text) {
        return new Date(...
            text
            .split('-')
            .map( ( item, index ) => item - index % 2 )
        );
    }
}