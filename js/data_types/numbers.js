"use strict";

let log = console.log.bind(console);

//  Uses IEEE-754 standard
//  double-precision floating point

//  Using e to add zeroes
let million_num = 1e7;
log(million_num);
let micro_num = 1e-6;
log(micro_num);

//  Hex numbers
let hex1 = 0x33;
log(hex1);
//  Cases doesn't matter
log( 0xFF , 0xff );

//  Binary numbers
let binary_ten = 0b10;
log(binary_ten);

//  Octal numbers
let octal_num = 0o333;
log(octal_num);

//  Using toString(base) to convert numbers
//  to another number system
//  default is 10
let num = 255;
log( num.toString(2) ); //  Binary
log( num.toString(8) ); //  Octal
log( num.toString(16) ); // Hexadecimal

//  Use .. (two dots) to call a method
//  directly on the number
//  because JS assumes one dot to be a
//  decimal instead of call
log( 2432..toString(2) );

//  Rounding numbers using functions
let p1 = 2.1;
let p2 = 2.6;
let n1 = -1.1;
let n2 = -1.6;

log( 
    "Floor: ", Math.floor(p1), 
    "Ceil: ",Math.ceil(p1), 
    "Round: ", Math.round(p1), 
    "Trunc: ", Math.trunc(p1)
);

log( 
    "Floor: ", Math.floor(p2), 
    "Ceil: ",Math.ceil(p2), 
    "Round: ", Math.round(p2), 
    "Trunc: ", Math.trunc(p2)
);

log( 
    "Floor: ", Math.floor(n1), 
    "Ceil: ",Math.ceil(n1), 
    "Round: ", Math.round(n1), 
    "Trunc: ", Math.trunc(n1)
);

log( 
    "Floor: ", Math.floor(n2), 
    "Ceil: ",Math.ceil(n2), 
    "Round: ", Math.round(n2), 
    "Trunc: ", Math.trunc(n2)
);

//  Rounding after n-th digit of a decimal
//  Two ways
let num_round = 3.14159;

//  Rounding to 2nd digit after the decimal
log( Math.floor(num_round * 100) / 100 );
log( num_round.toFixed(2) );    //  Returns string

//  The WTF part
log( 0.1 + 0.2 == 0.3 );
log( 0.1 + 0.2 );
//  It happens because we can't store exactly 0.1
//  or 0.2 in binary system

//  Fixing it
log( (0.1 + 0.2).toFixed(2) == 0.3.toFixed(2) );
log( (0.1 + 0.2).toFixed(2) );


//  NaN does not equal anything
log( NaN == NaN );
log( NaN === NaN );
//  We can check if the number is NaN using isNaN(num)
log( isNaN(NaN) );
log( isNaN(24) );
//  Checking for finiteness
log( isFinite(Infinity) );
log( isFinite(24) );
log( isFinite('') );    //  Empty string -> 0

//  Object.is for edge cases
log( Object.is(NaN, NaN) );
log( Object.is(0, -0) );


//  Reading numbers from units
//  using parseInt and parseFloat
log( parseInt("200px") );
log( parseFloat("100$") );
//  Does not work if letters appear before numbers
log( parseInt("$200") );
//  We can add radix too
log( parseInt("250px", 16) );


// Some more math functions
log( Math.random() );
log( Math.max(100, 200, 400) );
log( Math.min( -1, -100, -0.1) );
log( Math.pow(24, 2) );