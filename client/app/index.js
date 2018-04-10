var inputs = [
    document.querySelector( "#date" ),
    document.querySelector( "#value" ),
    document.querySelector( "#quantity" ),
];

var tbody = document.querySelector( "table tbody" )

document.querySelector( ".form" ).addEventListener( "submit", function( event ) {
    event.preventDefault (); // canceling the form submit.

    var tr = document.createElement( "tr" );

    inputs.forEach( function( input ) {
        var td = document.createElement( "td" ); // create a td without informations.
        td.textContent = input.value; // set the input value for td.
        tr.appendChild( td ); // add the td in the tr.
    });

    var tdVolume = document.createElement( "td" ); // new td to store the trading volume.

    // the 1 and 2 positions are storing the quantity and value inputs.
    tdVolume.textContent = inputs[1].value * inputs[2].value;

    tr.appendChild( tdVolume );

    tbody.appendChild( tr );

    inputs[0].value = ""; // clear the date input.
    inputs[1].value = ""; // clear the quantity input.
    inputs[2].value = ""; // clear the value input.

    inputs[0].focus (); // focus on the date.
});

console.log( inputs ); // verifying the array content.