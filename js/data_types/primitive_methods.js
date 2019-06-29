"use strict";

let log = console.log.bind(console);

//  Primitives are still primitives
//  However, we can access methods and properties
//  of strings, numbers, boolean and symbol
//  How it works
//  1.  Create a special object 'object wrapper' 
//  2.  Execute the method and return the result
//  3.  Destroy the special object

//  Few examples
let str = "This is a string";
log( str.toUpperCase() );

let num = 3.1415926;
log( num.toFixed(2) );

//  null and undefined have no object wrappers
//  so they are the most primitive