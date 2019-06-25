//  Type conversions in JS
"use strict"
//  ToString
let val = true;
val = String(val);
console.log('The boolean variable', val, 'is converted to string');
console.log('Now, the variable val is a', typeof(val) );

//  ToNumber
let str = "1234";
console.log( typeof(str), typeof( Number(str) ) );
// alert( Number("  1234 ") );
// alert( Number("z24") );
// alert( Number(true) );
// alert( Number(undefined) );
// alert( Number(null) );

// ToBoolean
console.log( Boolean("false") );
console.log( Boolean(" ") );

//  Really important stuff coming up
console.log('Expression 1');
console.log("" + 1 + 0);
console.log('Expression 2');
console.log("" - 1 + 0);
console.log('Expression 3');
console.log(true + false);
console.log('Expression 4');
console.log(6 / "3");
console.log('Expression 5');
console.log("2" * "3");
console.log('Expression 6');
console.log(4 + 5 + "px");
console.log('Expression 7');
console.log("$" + 4 + 5);
console.log('Expression 8');
console.log("4" - 2);
console.log('Expression 9');
console.log("4px" - 2);
console.log('Expression 10');
console.log(7 / 0);
console.log('Expression 11');
console.log(" -9 " + 5);
console.log('Expression 12');
console.log(" -9 " - 5);
console.log('Expression 13');
console.log(null + 1);
console.log('Expression 14');
console.log(undefined + 1);