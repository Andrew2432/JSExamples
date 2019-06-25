"use strict";

//  Shorthand for console.log()
let log = console.log.bind(console);

//  Creating empty objects
let user = new Object();    //  object constructor syntax
let user1 = {};     //  object literal syntax
log( typeof(user) );
log( typeof(user1) );

//  Initializing new objects
let user3 = {
    name: "Andrew",
    age: 18,
};
log(user3.name);
log(user3.age);

//  Adding a property to the object
user3.position = "Admin";
user3.isMaster = true;
log(user3.position);
log(user3.isMaster);

//  Deleting a property
delete user3.position;
log(user3.position);

//  Multiword property
user3["favorite color"] = "Black";
log(user3["favorite color"]);
delete user3["favorite color"];
log(user3["favorite color"]);

//  Computed properties
// let program = prompt("Which language do you like?", '');
// let programmer = {
//     [program]: 3,
// };

// log(programmer[program]);

//  Existence check (recommended)
log("name" in user3);
log("mark" in user3);

//  Another method
let user4 = {};
log(user4.noProperty === undefined);

//  Special for...in loop
for (let prop in user3) {
    log(prop, user3[prop]);
}

//  Integer properties
let user5 = {
    "1": "Andrew",
    "3": "Brad",
    "2": "Corey",
    "4": "sentdex",
};

//  This for loop orders in ascending order
for (let prop in user5) {
    log(prop, user5[prop]);
}

//  To override that behavior, we add '+' to the key
let user6 = {
    "+1": "Andrew",
    "+4": "sentdex",
    "+3": "Corey",
    "+2": "Brad",
};

for (let prop in user6) {
    log(+prop);
}

//  Const object
const user7 = {
    place: "Chennai",
    code: 600060,
};

//  Totally no problem
user7.state = "TN";
log(user7.state);

//  Cloning and merging objects
let mergedUsers = Object.assign(user3, user7, user5);
for (let prop in mergedUsers) {
    log(prop, mergedUsers[prop]);
}

//  Simple cloning
let simpleUser = Object.assign({}, user6);
for (let prop in simpleUser) {
    log(prop, simpleUser[prop]);
}

//  Object containing object
let complexUser = {
    name: "Andrew",
    profile: {
        age: 18,
        height: 177,
        weight: 80.
    }
};

let clonedComplexUser = Object.assign({}, complexUser);
log( complexUser.profile.age === clonedComplexUser.profile.age );

//  Changes made to the original object reflects in 
//  the cloned objects
complexUser.profile.height++;
log(clonedComplexUser.profile.height);

//  Exercise
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(menu) {

    for (let prop in menu) {
        if( typeof(menu[prop]) == 'number' ) {
            menu[prop] *= 2;
        }
    }
};

multiplyNumeric(menu);

for (let prop in menu) {
    log(prop, menu[prop]);
}

