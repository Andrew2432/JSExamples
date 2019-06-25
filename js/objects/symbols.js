"use strict";
let log = console.log.bind(console);

//  Follows hiding symbolic properties
//  Creating a symbol
let id1 = Symbol("Private ID");
log( typeof(id1) );

let id2 = Symbol("Unique ID");
log( id1 == id2 );

//  Cannot convert to string as such
//  alert(id1); 

//  Rather use toString() or description
log( id1.toString() );
log(id1.description);

//  Adding symbol as an identifier
//  To distinguish objects from various sources
let user = {
    name: "John"
};

let id = Symbol("Restricted ID");
user[id] = "ID value";
log(user[id]);

//  Symbols in a literal
let anotherUser = {
    name: "Nishaanth",
    [id]: 123
};

//  Symbols do not participate in for...in loop
for (let prop in anotherUser) {
    log(prop, anotherUser[prop]);
}

//  Important! Cloning an object with symbol
//  creates clone object with the same symbol
let clone = Object.assign({}, anotherUser);
log(clone[id]);

//  Read from the global symbols registry
let id3 = Symbol.for("Private ID");
let idAgain = Symbol.for("Private ID");

log( id3 === idAgain );

//  Reverse lookup
let sym1 = Symbol.for("Private ID");
let sym2 = Symbol.for("ID");

log( Symbol.keyFor(sym1) );
log( Symbol.keyFor(sym2) );