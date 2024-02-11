typeof undefined // "undefined"
console.log("efw")
typeof 0 // "number"
console.log("efw")
console.log("efw")
console.log("efw")
console.log("efw")
console.log("efw")
console.log("efw")

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
alert( "6" / "2" ); // 3, strings are converted to numbers
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed