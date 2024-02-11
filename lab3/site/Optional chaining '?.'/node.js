// // // let user = {}; // a user without "address" property

// // // alert(user.address.street); // Error!

// // // let user = {}; // user has no address

// // // alert(user.address ? user.address.street ? user.address.street.name : null : null);

// // // let user = {}; // user has no address

// // // alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)

// // // let user = {}; // user has no address


// // // let user = null;

// // // alert( user?.address ); // undefined
// // // alert( user?.address.street ); // undefined
// // // alert( user?.address?.street ); // undefined (no error)


// // let user = null;

// // alert( user?.address ); // undefined
// // alert( user?.address.street ); // undefined

// let key = "firstName";

// let user1 = {
//   firstName: "John"
// };

// let user2 = null;

// alert( user1?.[key] ); // John
// alert( user2?.[key] ); // undefined

let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"