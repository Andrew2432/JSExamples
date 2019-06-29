"use strict";

let log = console.log.bind(console);

//  Objects are truthy
//  Objects can be converted into 
//  "string" -> object to string
//  "number" -> object to number
//  "default" -> when conversion type is not sure

//  Using Symbol.toPrimitive to convert
//  any object to primitive

let user = {
    name: "Andrew",
    money: 1000000,

    [Symbol.toPrimitive](hint) {
        log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }    

};

// alert(user);
// log(+user);
// log(user + 1000);

//  Using toString() and valueOf()
//  They must return only primitives

let new_user = {
    name: "Andrew",
    money: 10000000,

    toString() {
        return `{name : "${this.name}"}`;
    },

    valueOf() {
        return this.money;
    }

};

// alert(new_user);
// log(+new_user);
// log(new_user + 1000);

//  Using toString() as a catch-all technique
//  catch all means to be able to handle any kind of
//  object to primitive conversion

let obj1 = {
    toString() {
        return "24";
    }
};

let obj2 = {
    toString() {
        return true;
    }
};

//  Math operations except + do math
alert(obj1 * 2);

//  + sign concatenates
alert(obj1 + 2);

//  ToPrimitive returned boolean
//  that defaults to number
//  true->1
alert(obj2 + 2);
