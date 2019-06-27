"use strict";

let log = console.log.bind(console);

//  Creating a method in an object
let user = {
    name: "Andrew",
    age: 18
};

user.sayHello = () => log("Hello");

//  Calling the method
user.sayHello();

//  Method shorthand
let user2 = {
    sayHi() {
        log("Hello from user2");
    }
};

user2.sayHi();

//  Using this
let user3 = {
    name: "Brad",
    sayBrad() {
        log(this.name);
    }
};

user3.sayBrad();

//  "this" is not bound
let admin = { name: "Admin" };
let superUser = { name: "Superuser" };

function sayName() {
    log(this.name);
}

//  Adding method to objects
admin.func = sayName;
superUser.func = sayName;

//  Call it in
admin.func();
superUser.func();

//  This works!
admin['func']();

//  Calling this without an object, WCGW
function sayBye() {
    log(this);
}

sayBye();   //  Returns undefined in strict mode
