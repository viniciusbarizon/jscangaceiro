// creating the controller instance.
const controller = new TradingController ();
const $ = document.querySelector.bind(document);

// binding the submit event from the form to call the method add.
$('.form')
    .addEventListener('submit', controller.add.bind(controller));

$('#button-clear')
    .addEventListener('click', controller.clear.bind(controller));

$('#button-import')
    .addEventListener('click', controller.importTradings.bind(controller));