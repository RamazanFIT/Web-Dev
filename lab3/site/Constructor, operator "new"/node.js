// // // // // // function User(name) {
// // // // // //   this.name = name;
// // // // // //   this.isAdmin = false;
// // // // // // }

// // // // // // let user = new User("Jack");

// // // // // // console.log(user.name); // Jack
// // // // // // console.log(user.isAdmin); // false


// // // // // // function User(name) {
// // // // // //   this.name = name;
// // // // // //   this.isAdmin = false;
// // // // // // }

// // // // // // user = new User("Jack");

// // // // // // console.log(user.name); // Jack
// // // // // // console.log(user.isAdmin); // false


// // // // // // function User(name) {
// // // // // //   // this = {};  (implicitly)

// // // // // //   // add properties to this
// // // // // //   this.name = name;
// // // // // //   this.isAdmin = false;

// // // // // //   // return this;  (implicitly)
// // // // // // }


// // // // // function User(name) {
// // // // //   if (!new.target) { // if you run me without new
// // // // //     return new User(name); // ...I will add new for you
// // // // //   }

// // // // //   this.name = name;
// // // // // }

// // // // // let john = User("John"); // redirects call to new User
// // // // // console.log(john.name); // John


// // // // function BigUser() {

// // // //   this.name = "John";

// // // //   return { name: "Godzilla" };  // <-- returns this object
// // // // }

// // // // // alert( new BigUser().name );  // Godzilla, got that object

// // // // let x = new BigUser();


// // // // console.log(x.name);


// // // function SmallUser() {

// // //   this.name = "John";

// // //   return this; // <-- returns this
// // // }

// // // console.log( new SmallUser().name );  // John

// // function User(){
// //   this.x = 1;
// // }
// // let user = new User; // <-- no parentheses
// // // same as
// // user = new User();


// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     alert( "My name is: " + this.name );
//   };
// }

// let john = new User("John");

// john.sayHi(); // My name is: John


