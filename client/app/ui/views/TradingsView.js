class TradingsView {
    constructor(seletor) {
        this._element = document.querySelector(seletor)
    }

    // get the model.
    update(model) {
        this._element.innerHTML = this.template(model);
    }

    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </thead>

            <tbody>
                ${model.toArray().map(trading =>
                `
                    <tr>
                        <td>${DateConverter.toText(trading.date)}</td>
                        <td>${trading.quantity}</td>
                        <td>${trading.value}</td>
                        <td>${trading.volume}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${model.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>`
    }
}