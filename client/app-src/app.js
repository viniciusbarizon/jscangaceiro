import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import 'bootstrap/js/modal.js';

import '../css/mycss.css';

import { TradingController } from './controllers/TradingController.js';
import { Trading } from './domain/index.js';

$('h1').on('click',() => alert('clicked'));

console.log('Função adicionada pelo bootstrap');
console.log($('h1').modal);

// creating the controller instance.
const controller = new TradingController ();

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

fetch('http://localhost:3000/tradings', config)
    .then(() => console.log('Data has been sent successfully'));