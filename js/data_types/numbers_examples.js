"use strict";

let log = console.log.bind(console);

//  Example 1
function Sum() {
    let a = +prompt("Enter a value", 0);
    let b = +prompt("Enter another value:", 0);
    log( a + b );
}

//  Sum();

//  Example 2
//  Prompting user until number is entered
function AnnoyUser() {
    let result;

    while(true) {
        result = +prompt("Enter a number:", '');
        
        if( result == '' || result == null )
            return null;
        else if( typeof(result) == "number" && !isNaN(result) )
            return result;
        else
            continue;
    }

}

//  log( AnnoyUser() );

//  Modified version
function AnnoyNewUser() {
    let num;
    do {
        num = +prompt("Enter a number", 0);
    } while( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

//  log( AnnoyNewUser() );
