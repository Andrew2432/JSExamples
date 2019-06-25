"use strict";
let log = console.log.bind(console);

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    }
}

let family = marry( {
    name: "Joseph"
}, {
    name: "Mary"
});

for (let prop in family) {
    log(prop, family[prop]);
}

// Deleting links
delete family.father;
delete family.mother.husband;

log(family.father);     //  father is now unreachable, 
                        //  will be deleted by garbage collector

//  Deleting the root 
family = null;
//  Throws error
//  log(family.mother);     
