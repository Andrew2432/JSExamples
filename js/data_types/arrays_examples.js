"use strict";

let log = console.log.bind(console);

//  Example 1
//  Array operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
log(styles);

let mid = Math.floor( (styles.length - 1 / 2) )
styles[mid] = "Classics";
log(styles);

log( styles.shift() );
log(styles);

styles.unshift("Rap", "Reggae");
log(styles);


//  Example 2
//  Sum input numbers
function sumInput() {
    let num = [];
    let sum = 0;
    while(true) {
        let a = prompt("Enter a number:", 0);
        
        if (a === '' || !isFinite(a) || a == null) break;
            
        num.push(+a);
    }
    
    for( let i of num ) {
        sum += i;
    }
    alert(`The sum is ${sum}`);
}

//  sumInput();



//  Example 3
//  Getting consecutive max sum 
//  in an array
function maxArraySum() {
    let arr = [-1, 2, 3, -9, 11];
    let partialSum = 0;
    let maxSum = 0;

    for( let item of arr ) {
        partialSum += item;
        maxSum = Math.max(partialSum, maxSum);
        if ( partialSum < 0 ) partialSum = 0;
    }
    return maxSum;
}

log( maxArraySum() );