let x = (a, b) => a + b;

alert(x(1, 2));

// debugger;


let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith

let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
alert(x + "Raamzan");