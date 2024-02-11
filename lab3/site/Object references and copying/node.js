// // // let message = "Hello!";
// // // let phrase = message;

// // // let user = { name: "John" };

// // // let permissions1 = { canView: true };
// // // let permissions2 = { canEdit: true };

// // // // copies all properties from permissions1 and permissions2 into user
// // // Object.assign(user, permissions1, permissions2);

// // // // now user = { name: "John", canView: true, canEdit: true }
// // // alert(user.name); // John
// // // alert(user.canView); // true
// // // alert(user.canEdit); // true

// // let user = {
// //   name: "John",
// //   age: 30
// // };

// // let clone = Object.assign({}, user);

// // alert(clone.name); // John
// // alert(clone.age); // 30

// // // let user = {
// // //   name: "John",
// // //   sizes: {
// // //     height: 182,
// // //     width: 50
// // //   }
// // // };

// // // alert( user.sizes.height ); // 182


// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = Object.assign({}, user);

// alert( user.sizes === clone.sizes ); // true, same object

// // user and clone share sizes
// user.sizes.width = 60;    // change a property from one place
// alert(clone.sizes.width); // 60, get the result from the other one


// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// // clone = structuredClone(user);

// // alert( user.sizes === clone.sizes ); // false, different objects

// // // user and clone are totally unrelated now
// // user.sizes.width = 60;    // change a property from one place
// // alert(clone.sizes.width); // 50, not related

// let user = {};
// // let's create a circular reference:
// // user.me references the user itself
// user.me = user;

// let clone = structuredClone(user);
// alert(clone.me === clone); // true


// let someData = {
//     f : (a) => a * 2
// };
// console.log(someData.f(12));

// let copyData = structuredClone(someData); // error

