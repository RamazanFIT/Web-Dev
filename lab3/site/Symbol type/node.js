// // let id = Symbol("id");

// // user[id] = "Their id value";

// // let user = { name: "John" };

// // // Our script uses "id" property
// // user.id = "Our id value";

// // // ...Another script also wants "id" for its purposes...

// // user.id = "Their id value"
// // // Boom! overwritten by another script!

// // id = Symbol("id");

// // user[id] = "Their id value";

// // id = Symbol("id");
// // let user = {
// //   [id]: 123
// // };


// // let clone = Object.assign({}, user);

// // alert( clone[id] ); // 123


// // id = Symbol.for("id"); // if the symbol did not exist, it is created

// // // read it again (maybe from another part of the code)
// // let idAgain = Symbol.for("id");

// // // the same symbol
// // alert( id === idAgain ); // true


// // let globalSymbol = Symbol.for("name");
// // let localSymbol = Symbol("name");

// // alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
// // alert( Symbol.keyFor(localSymbol) ); // undefined, not global

// // alert( localSymbol.description ); // name


// let user = {
// name: "John",
// money: 1000,

// [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
// }
// };

// // conversions demo:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500


// let obj = {
//     // toString handles all conversions in the absence of other methods
// toString() {
//     return "2";
// }
// };

// alert(obj * 2);

// let obj = {
// toString() {
//     return "2";
// }
// };

// alert(obj + 2);

