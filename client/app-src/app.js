import { TradingController } from './controllers/TradingController.js';

import { Trading } from './domain/index.js';

// creating the controller instance.
const controller = new TradingController ();
const $ = document.querySelector.bind(document);

const trading = new Trading(new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');

const body = JSON.stringify(trading);
console.log(body);
const method = 'POST';

const config = {
    method,
    headers,
    body
};

fetch('/tradings', config)
    .then(() => console.log('Data has been sent successfully'));

// binding the submit event from the form to call the method add.
$('.form')
    .addEventListener('submit', controller.add.bind(controller));

$('#button-clear')
    .addEventListener('click', controller.clear.bind(controller));

$('#button-import')
    .addEventListener('click', controller.importTradings.bind( controller));