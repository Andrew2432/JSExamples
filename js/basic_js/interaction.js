//  alert, prompt, confirm
"use strict"

//  alert()
// let message = 'This is a modal alert';
// alert(message);

//  prompt()
// let title = 'What is your number?';
// let result = prompt( title, 100 );
// let output;

// if( !( result === null ) )
//     output = `Your favorite number is ${result}!?`;
// else   
//     output = 'Please enter an answer.';

// alert(output);

//  confirm()
let question = 'Do you want to leave?';
let result_2 = confirm(question);

if( result_2 == true )
    alert('Bye!');
else
    alert('Okay nice!');


