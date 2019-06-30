"use strict";

let log = console.log.bind(console);


//  Example 1
//  Uppercase the first character
function capitalizeFirst(str) {
    // let result = '';
    // result = str.slice(0,1).toUpperCase();
    // result += str.slice(1);
    // return result;
    if (!str) return str;
    return( str.slice(0,1).toUpperCase() + str.slice(1) );
}

//  log( capitalizeFirst("123") );


//  Example 2
//  Detect spam text
function checkSpam(str) {
    let spamText = str.toLowerCase();
    return ( spamText.includes("viagra") || spamText.includes("xxx") );
}

//  log( checkSpam("don't see xxxxxx") );


//  Example 3
//  Truncate text
function truncateText(str, len) {
    
    if ( str.length < len ) return str;
    else {
        return( str.slice(0, len - 3) + "...");
    }
}

//  log( truncateText("Hi everyone", 20) );
//  log( truncateText("What I meant to say", 4) );


//  Example 4
//  Get money
function extractCurrency(str) {
    return( +str.slice(1) );
}

log( extractCurrency("$120") );