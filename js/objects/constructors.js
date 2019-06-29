"use strict";

let log = console.log.bind(console);

//  Constructor function
//  Begin with capital letter

function User(name) {
    this.name = name;
    this.id = 1;
    this.age = 18;
}

let user = new User("Andrew");

log(user.name);
log(user.id);

//  What actucally happens
// function User(name) {
//     Create an empty object
//     this = {};

//     Assign properties
//     this. name = name;
//     this.id = 1;

//     Return the object
//     return this;
// }

//  Let's go advanced
//  Check whether the function is called
//  with new or a regular call
//  using new.target

function CheckCaller() {
    log(new.target);
}

//  empty for regular calls
CheckCaller();

//  equals the function if called
//  with new
new CheckCaller();


//  Return from constructors
//  return called with object -> return that object
//  return called with primitive -> ignore it
//  IMPORTANT: Constructors usually do not have returns!
function ReturnObject() {
    this.name = "Andrew";
    return { name: "God" };
}

log( new ReturnObject().name );

function ReturnPrimitive() {
    this.name = "Jesus";
    return 100;
}

log( new ReturnPrimitive().name );

//  Methods in constructors
//  Nice stuff!!
function NiceMethod(name) {
    this.name = name;

    this.Hello = () => {
        log(`My name is ${this.name}`);
    }

}

let Test = new NiceMethod("Mother Mary");

Test.Hello();