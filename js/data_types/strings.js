"use strict";

let log = console.log.bind(console);

//  Length of string
let str = "Andrew";
log( str.length );

//  Fetching a character at position
log( str[0] );
log( str.charAt(3) );

//  Making it all upper or lower case
log( str.toUpperCase() );
log( str.toLowerCase() );

//  Finding a substring
let phrase = "God is Great!";

//  Finding first occurence
log( phrase.indexOf("G") );

// Finding second occurence
log( phrase.indexOf("G", 2) );

//  Finding all occurences
let saying = "As sly as a fox, as strong as an ox";
let substr = "as";
let pos = 0;

while(true) {
    let foundPos = saying.indexOf(substr, pos);

    if (foundPos == -1 ) break;

    log( `Found at position ${foundPos}` );

    pos = foundPos + 1;
}

//  Shorter algorithm
// let pos = -1;
// while( (pos = saying.indexOf(target, pos)) != -1) {
//     log( pos);
// }

//  Checking if string is part of a string
log( "This is real".includes("is") );
log( "This is surreal".startsWith("This") );
log( "This is outrageous".endsWith("s") );


//  Finding substrings
//  1. Using slice
//  Start < end always
//  Recommended
log( phrase.slice(0, 5) );
log( phrase.slice(3) );
log( phrase.slice(-5, -1) );

//  2. Using substring
//  Allows start > end
//  Does not allow negative indexing
log( phrase.substring(6, 2) );
log( phrase.substring(2, 6) );
log( phrase.substring(-1, -5) ); 

//  3. Using substr
//  Uses start and length
log( phrase.substr(0, 8) );
log( phrase.substr(-6, 5) );


//  Using codePointAt() to find Unicode value
function findUnicodeValues() {
    
    let str;
    for (let i = 65; i <= 220; i++) {
        str = String.fromCodePoint(i);  //  Returns character
        str += ' '+str.codePointAt(0);  //  Returns Unicode value
        log( str );
        str = '';
    }
}

findUnicodeValues();





