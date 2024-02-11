let billion = 1000000000;
billion = 1_000_000_000;

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log( a == b );

let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) ); 


// console.log( 123456..toString(3) );
// console.log(83224..toString(36));
let x = 123;
console.log(x.toString(12));


alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

// Hello! I'm a self-increasing number!
alert( 9999999999999999 ); // shows 10000000000000000

alert( Number.isNaN(NaN) ); // true
alert( Number.isNaN("str" / 2) ); // true

// Note the difference:
alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
alert( isNaN("str") ); //

alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); // false
alert( Number.isFinite(2 / 0) ); // false

// Note the difference:
alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
alert( isFinite("123") ); 


alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') );


alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) );


alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() );


alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) );


alert( Math.pow(2, 10) );