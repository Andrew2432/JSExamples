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

//  Advanced topic
let user4 = {
    name: "Corey",
    hi() { log(this.name); },
    bye() { log("bye!"); }
};

//  Simple call
//  user4.hi(); 

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
obj.go();

//  This is also a normal call
//  Parantheses doesn't matter as 
//  dot (.) is first operation 
//  in order of precedence
(obj.go)();

//  This one can be broken down as
//  method = obj.go;
//  method();
//  This is a complex call (expression).method()
//  Here, method is executed as a function, without this
(method = obj.go)();

//  Similar to above
//  obj.go is a function, which is a truthy 
//  obj.stop is undefined, which is a falsy
//  so it becomes to obj.go();
(obj.go || obj.stop)();