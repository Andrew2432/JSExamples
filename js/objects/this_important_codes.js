"use strict";

let log = console.log.bind(console);

//  Advanced topic
let user = {
    name: "Corey",
    hi() { log(this.name); },
    bye() { log("bye!"); }
};

//  Simple call
//  user.hi(); 

//  Does not work
//  (user.name == "Corey" ? user.hi : user.bye)();  

/*  
    what actually happens
    user.name == "Corey" is true
    thus user.hi is choosed
    we now have
    let hi = user.hi;
    hi(); 
    that does not work
    because 'this' is lost

    we will solve this problem later

*/

//  Examples
let obj, method;

obj = {
    go: function() { log(this); }
};

//  This is a normal call
//  obj.go();

//  This is also a normal call
//  Parantheses doesn't matter as 
//  dot (.) is first operation 
//  in order of precedence
//  (obj.go)();

//  This one can be broken down as
//  method = obj.go;
//  method();
//  This is a complex call (expression).method()
//  Here, method is executed as a function, without this
//  (method = obj.go)();

//  Similar to above
//  obj.go is a function, which is a truthy 
//  obj.stop is undefined, which is a falsy
//  so it becomes to obj.go();
//  (obj.go || obj.stop)();


//  Some more examples
function makeUser() {
    return {
        name: "Andrew",
        ref: this
    };
};

let new_user = makeUser(); 

//  This will cause an error
//  because ref: this is called
//  without a method
//  log( new_user.ref.name );

//  Modifying the makeUser() function as below
function makeUserCorrect() {
    return {
        name: "Andrew",
        ref() {
            return this;
        }
    };
};

let correct_user = makeUserCorrect();

//  This works because
//  correct_user.ref() is a method
//  that returns this
log( correct_user.ref().name );

//  Creating a calculator
let calculator = {
    val1 : 0,
    val2: 0,

    read() {
        let r1 = prompt('Enter value 1', 0);
        let r2 = prompt('Enter value 2', 0);
        this.val1 = +r1;    //  Converting string to number
        this.val2 = +r2;
    },

    sum() {
        return this.val1 + this.val2;
    },

    mul() {
        return this.val1 * this.val2;
    }
};

// calculator.read();
// log( calculator.sum() );
// log( calculator.mul() );

//  Making a chain of calls
let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep: function() {
        log( this.step );
    }
};

ladder.up().up().down().showStep();