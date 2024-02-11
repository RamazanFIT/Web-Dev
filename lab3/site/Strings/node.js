// // // // let single = 'single-quoted';
// // // // let double = "double-quoted";

// // // // let backticks = `backticks`;


// // // // function sum(a, b) {
// // // //   return a + b;
// // // // }

// // // // alert(`1 + 2 = ${sum(1, 2)}.`);

// // // // let guestList = `Guests:
// // // //  * John
// // // //  * Pete
// // // //  * Mary
// // // // `;

// // // // alert(guestList);
// // // // let guestList = "Guests:\n * John\n * Pete\n * Mary";

// // // // alert(guestList);

// // // for (let char of "Hello") {
// // //   alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
// // // }

// // // let str = `Hello`;

// // // alert( str[-2] ); // undefined
// // // alert( str.at(-2) ); // l

// // // let str = 'Hi';

// // // str[0] = 'h'; // error
// // // alert( str[0] ); // doesn't work


// // let str = 'Hi';

// // str = 'h' + str[1]; // replace the string

// // alert( str ); // hi

// // alert( 'Interface'.toUpperCase() ); // INTERFACE
// // alert( 'Interface'.toLowerCase() ); // interface

// // alert( 'Interface'[0].toLowerCase() ); // 'i'

// // let str = 'Widget with id';

// // alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// // alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

// // alert( str.indexOf("id") );

// // let str = "As sly as a fox, as strong as an ox";
// // let target = "as";

// // let pos = -1;
// // while ((pos = str.indexOf(target, pos + 1)) != -1) {
// //   alert( pos );
// // }


// // let str = "Widget with id";

// // if (str.indexOf("Widget")) {
// //     alert("We found it"); // doesn't work!
// // }

// // alert( "Widget with id".includes("Widget") ); // true

// // alert( "Hello".includes("Bye") ); // false  

// // alert( "Widget".includes("id") ); // true
// // alert( "Widget".includes("id", 3) );

// // alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
// // alert( "Widget".endsWith("get") );

// // let str = "stringify";
// // alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
// // alert( str.slice(0, 1) );


// // let str = "stringify";
// // alert( str.slice(2) );



// let str = "stringify";

// // start at the 4th position from the right, end at the 1st from the right
// alert( str.slice(-4, -1) );