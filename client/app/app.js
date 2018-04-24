// creating the controller instance.
const controller = new TradingController ();

// binding the submit event from the form to call the method add.
document.querySelector('.form').addEventListener('submit', controller.add.bind(controller));

document.querySelector('#button-clear').addEventListener('click', controller.clear.bind(controller));