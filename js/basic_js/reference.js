//  Use this mode to run JS in modern way, recommended
//  Use semicolons
"use strict"

//  Declaring variables
let name = 'Andrew';
console.log('The variable name is: ', name);

//  Declaring a constant
//  Use uppercase name for static constants
//  Use camelcase name for dynamic constants
const PI = 3.14;

//  Doing a simple calculation
let area = PI * PI;
console.log('The area of circle with radius', PI, 'is: ', area);

//  Datatypes in JS
//  Number 
let int_data = 100;
console.log('The type of 100 is: ', typeof( int_data ) );
let dec_data = 99.99;
console.log('The type of 99.99 is: ', typeof( dec_data ) );
let infinity = Infinity;
let negative_infinity = -Infinity;
let not_a_number = NaN;

//  String
let str1 = "Hello";
let str2 = "World!";
let str3 = `Hello ${1 / 0} Loving ${str2}`; //  Only backticks can do this
console.log('This is a backtick string output: ');
console.log(str3);

//  Boolean
let true_value = true;
let false_value = !(int_data > dec_data);
console.log( true_value, false_value );

//  null
let limit = null;

//  undefined
let some;
console.log('The data type of some is', some);

//  Official error in JS
console.log('The official error is typeof( null ) is', typeof( null ) );
console.log('But it is not an object');