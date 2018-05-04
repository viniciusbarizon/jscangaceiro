class DateInvalidException extends ApplicationException {
    constructor() {
        super('The date should be with the format dd/mm/aaaa.');
    }
}