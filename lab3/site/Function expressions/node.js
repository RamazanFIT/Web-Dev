// function sayHi() {
//     console.log( "Hello" );
//   }

// let sayHi = function() {
// console.log( "Hello" );
// };


// sayHi();


// let someF = function(x, y){
//     return x + y
// };


// console.log(someF(1, 2));


// function sayHi() {   // (1) create
//     console.log( "Hello" );
//   }
  
//   let func = sayHi;    // (2) copy
  
//   func(); // Hello     // (3) run the copy (it works)!
//   sayHi();

// let sayHi = function() { // (1) create
//     console.log( "Hello" );
// };

// let func = sayHi;


// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     console.log("Hello!");
//   }

// } else {

//   function welcome() {
//     console.log("Greetings!");
//   }

// }

// // ...use it later
// welcome();

// let age = 16; // take 16 as an example

// if (age < 18) {
//   welcome();               // \   (runs)
//                            //  |
//   function welcome() {     //  |
//     console.log("Hello!");       //  |  Function Declaration is available
//   }                        //  |  everywhere in the block where it's declared
//                            //  |
//   welcome();               // /   (runs)

// } else {

//   function welcome() {
//     console.log("Greetings!");
//   }
// }

let age = 18;

let welcome;

if (age < 18) {

  welcome = function() {
    console.log("Hello!");
  };

} else {

  welcome = function() {
    console.log("Greetings!");
  };

}

welcome();