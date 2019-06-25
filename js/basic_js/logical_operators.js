//  AND, OR, NOT
//  Precedence : ! > && > ||
"use strict"

//  OR returns first truth value
//  without conversion
// let r1 = false || null || "is this true?" || NaN || true;
// alert(r1);

//  Also can short circuit an expression
// let x;
// true || (x = 1);
// alert(x);   //  Returns undefined as true is first truthy
// false || (x = 1);
// alert(x);   //  Returns 1 as it's the first truthy

//  When all values are truthy, OR returns first value
// let r2 = true || !false || 100 || 1 || "This is a truthy";
// alert(r2);

//  AND returns the first falsy value
//  without conversion
// let r3 = true && !false && 'I\'m not false' && undefined && null;
// alert(r3);

//  When all values are truthy, AND returns the last value
// let r4 = true && 123 && "I'm a string" && 45;
// alert(r4);

//  NOT negates (it's obvious)
//  But double NOT? It converts the value to boolean
// let r5 = !!null;
// alert(r5);

//  Hard but easy exercise
let question = 'Who\'s there?';
let result = prompt(question, '');

if( result == null || result == '' )
    alert('Cancelled.');
else if( result == 'Admin' ){
    let ad_pass = prompt('Password?', '');

    if( ad_pass == null || ad_pass == '' )
        alert('Cancelled.');
    else if( ad_pass == "TheMaster" )
        alert('Welcome!');
    else 
        alert('Wrong password');

}
else
    alert('I don\'t know you');
