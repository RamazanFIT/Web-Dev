// // // function showMessage() {
// // //     // concole.log( 'Hello everyone!' );
// // //     console.log("Hello worldddddd");
// // // }

// // // showMessage();

// // // function showMessage(from, text) { // parameters: from, text
// // //     console.log(from + ': ' + text);
// // //   }
  
// // //   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// // //   showMessage('Ann', "What's up?");


// // function showMessage(from, text) {

// //     from = '*' + from + '*'; // make "from" look nicer
  
// //     console.log( from + ': ' + text );
// //   }
  
// //   let from = "Ann";
  
// //   showMessage(from, "Hello"); // *Ann*: Hello
  
// //   // the value of "from" is the same, the function modified a local copy
// //   console.log( from ); // Ann

// //   function showMessage(from, text = "no text given") {
// //     console.log( from + ": " + text );
// //   }
  
// //   showMessage("Ann", undefined); // Ann: no text given

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }


// return (
//     some + long + expression
//     + or +
//     whatever * f(a) + f(b)
//     )

// A function declaration looks like this:

// function name(parameters, delimited, by, comma) {
//   /* code */
// }


// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);
//   } else {
//     alert( pow(x, n) );
//   }


