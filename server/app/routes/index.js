/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    app.route('/tradings/week')
        .get(api.listWeek);

    app.route('/tradings/previous')
        .get(api.listPrevious);

    app.route('/tradings/beforePrevious')
        .get(api.listBeforePrevious);

    app.route('/tradings')
        .post(api.addTrading);
};
