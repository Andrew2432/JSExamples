//  Functions !!
'use strict';
//  Sample function
function alertUser() {
    alert('User!!');
}

//  Function with default values
function defaultFun( num, age = 18, str = defaultValue() ) {
    alert(`ID: ${num}, AGE: ${age} TEXT: ${str}`);
}

//  More complex
function defaultValue() {
    return('This is a default value');
}

// defaultFun(200, 20);
// defaultFun(150);
// defaultFun(120, 21, 'Hello!');

//  Function expressions
let myFunction = function() {
    alert('Wow I can declare functions like this too!');
    return true;
};  //  Semicolon REQUIRED


//  Let's execute
//  myFunction();

//  Copying one function to another
let anotherFun = myFunction;
//  anotherFun();

//  Callback functions: Functions that has functions
//  as parameters
// function ask(question, yes, no) {
//     if( confirm(question) ) yes();
//     else no();
// }

function showOk() {
    alert('You agreed!');
}

function showCancel() {
    alert('You cancelled the execution.');
}

//ask("Do you agree to T&C?", showOk, showCancel);

//  Same code in Function Expressions
//  The functions are called anonymous functions
// ask(
//     "Do you agree?",
//     function() { alert("You agreed"); },
//     function() { alert("You cancelled"); }
// );

//  Arrow functions - Better than Function Expressions
//  let func = (arg1, args, ...) => expression
let sum = (a, b) => a + b;
//  alert( sum( 1, 2 ) );

//  One parameter expression
let square = n => n * n;
// alert( square(24) );

//  No argument expression
let helloWorld = () => alert("Hello!");
// helloWorld();

//  Using function expression without arrow
//  let age_of_person = prompt('What is your age?', '');

// if( age_of_person < 18 ) {
//     welcome = function() {
//         alert('You cannot vote.');
//     };
// } else {
//     welcome = function() {
//         alert('You are eligible to vote.');
//     };
// }

// welcome();

//  Doing with arrow functions

// if( age_of_person < 18 ) {
//     welcome = () => alert('You cannot vote');
// } else {
//     welcome = () => alert('You are eligible to vote.');
// }

//  welcome();

//  More simplification
// let welcome = ( age_of_person < 18 )?
//     () => alert('You can vote') :
//     () => alert('You are eligible to vote');

// welcome();

//  Making the ask() function as arrow
let ask = ( question, yes, no ) => {
   confirm(question) ? yes() : no() 
};

ask(
    "Do you agree?",
    () => alert("Yes you agreed."),
    () => alert("Oh yeah? Fine :)")
);