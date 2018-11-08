System.register(['./controllers/TradingController.js', './util/index.js'], function (_export, _context) {
    "use strict";

    var TradingController, debounce;
    return {
        setters: [function (_controllersTradingControllerJs) {
            TradingController = _controllersTradingControllerJs.TradingController;
        }, function (_utilIndexJs) {
            debounce = _utilIndexJs.debounce;
        }],
        execute: function () {

            // creating the controller instance.
            const controller = new TradingController();
            const $ = document.querySelector.bind(document);

            // binding the submit event from the form to call the method add.
            $('.form').addEventListener('submit', controller.add.bind(controller));

            $('#button-clear').addEventListener('click', controller.clear.bind(controller));

            $('#button-import').addEventListener('click', debounce(() => {
                console.log('it ran the debouce operation');
                controller.importTradings();
            }, 1000));
        }
    };
});
//# sourceMappingURL=app.js.map