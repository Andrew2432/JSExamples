"use strict";

let log = console.log.bind(console);

let arr = new Array();  //  Please don't use like this!
let arr2 = [];  //  Most used

let lang = ['C', 'C++', 'Python'];

//  Always use for...of loop
//  Not for..in loop
//  Used for items only
for (let a of lang) {
    log(a);
}
 
//  Fastest for loop for arrays
for (let i = 0; i < lang.length; i++) {
    log( lang[i] );
}
//  Replace an element
lang[4] = 'JavaScript';
lang[1] = 'Java';
log( lang );

//  Getting length
log( lang.length );

//  Data Structure operations
//  Rear end operations: Stack
lang.push("Go");
log(lang);
log( lang.pop() );
log(lang);

//  Front end operations: Queue
log( lang.shift() );
log(lang);
lang.unshift('PHP');
log(lang);

//  Truncating the array
lang.length = 4;
log(lang);

//  Clearing the array
arr = [1, 2, 3];
log(arr);
arr.length = 0;
log(arr);

//  Multidimensional arrays
let matrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];
log(matrix);

//  Arrays don't have Symbol.toPrimitive() , nor
//  valueOf(), so they have their own version of toString
log( [] + 1 );
log( [1] + 1 );
log( [1,2] + 1 );