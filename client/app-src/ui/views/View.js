export class View {
    constructor(seletor) {
        this._element = document.querySelector(seletor)
    }

    // get the model.
    update(model) {
        this._element.innerHTML = this.template(model);
    }

    template(model) {
        throw new Error('You must implement the method template.');
    }
}