class MessageView extends View {
    template(model) {
        return model.text ?
            `<p class="alert alert-info">Trading has been added with success.</p>` :
            `<p></p>`;
    }
}