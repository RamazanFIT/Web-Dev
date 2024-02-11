// // // // // // let user = {
// // // // // //   name: "John",
// // // // // //   age: 30
// // // // // // };


// // // // // // user = {
// // // // // //   name: "John",
// // // // // //   age: 30
// // // // // // };

// // // // // // user.sayHi = function() {
// // // // // //   console.log("Hello!");
// // // // // // };

// // // // // // user.sayHi(); // Hello!


// // // // // // let user = {
// // // // // //   // ...
// // // // // // };

// // // // // // // first, declare
// // // // // // function sayHi() {
// // // // // //   console.log("Hello!");
// // // // // // }

// // // // // // // then add as a method
// // // // // // user.sayHi = sayHi;

// // // // // // user.sayHi(); // Hello!

// // // // // // // these objects do the same

// // // // // // user = {
// // // // // //   sayHi: function() {
// // // // // //     console.log("Hello");
// // // // // //   }
// // // // // // };

// // // // // // // method shorthand looks better, right?
// // // // // user = {
// // // // //   sayHi() { // same as "sayHi: function(){...}"
// // // // //     console.log("Hello");
// // // // //   }
// // // // // };

// // // // // for(it in user){
// // // // //     console.log(it);
// // // // // }

// // // // // user.sayHi();


// // // // let user = {
// // // //   name: "John",
// // // //   age: 30,

// // // //   sayHi() {
// // // //     // "this" is the "current object"
// // // //     console.log(this.name);
// // // //   }

// // // // };

// // // // user.sayHi(); // John


// // let user1 = {
// //   name: "John",
// //   age: 30,

// //   sayHi() {
// //     console.log(user.name); // "user" instead of "this"
// //   }

// // };


// // let user = {
// //   name: "John",
// //   age: 30,
// //   copy : (user1)
// //   // ,
// //   // sayHi() {
// //   //   console.log( user.name ); // leads to an error
// //   // }
// // };


// // // let admin = user;
// // // // user = null; // overwrite to make things obvious

// // // admin.sayHi(); 


// // user = {
// //   name: "John",
// //   age: 30,

// //   sayHi() {
// //     alert(user.name); // "user" instead of "this"
// //   }

// // };

// // user = {
// //   name: "John",
// //   age: 30,

// //   sayHi() {
// //     alert( user.name ); // leads to an error
// //   }

// // };


// // let admin = user;
// // user = null; // overwrite to make things obvious

// // admin.sayHi();


// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f']();


let user = {
  firstName: "Ilya",

    arrow : () => (user.firstName)

};

console.log(user.arrow())


