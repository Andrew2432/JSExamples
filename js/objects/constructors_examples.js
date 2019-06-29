"use strict";

let log = console.log.bind(console);

//  Creating a constructor called Calculator
function Calculator() {
    this.val1 = 0;
    this.val2 = 0;

    this.read = () => {
        this.val1 = +prompt('Enter value 1:', 0);
        this.val2 = +prompt('Enter value 2:', 0);
    }

    this.sum = () => {
        return this.val1 + this.val2;
    }

    this.mul = () => {
        return this.val1 * this.val2;
    }

}

let calc = new Calculator();
// calc.read();
// log("Sum = " + calc.sum() );
// log("Product = " + calc.mul() );


//  Creating a constructor called Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read = () => {
        let num = +prompt("How much to add?", 0);
        this.value += num;
        //return this; use for chaining calls
    }

}

let ac = new Accumulator(1);
ac.read();
ac.read();
log(ac.value);