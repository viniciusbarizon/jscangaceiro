// creating the controller instance.
let controller = new TradingController ();

// binding the submit event from the form to call the method add.
document.querySelector( '.form' ).addEventListener( 'submit', controller.add.bind( controller ) );