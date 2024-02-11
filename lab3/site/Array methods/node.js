// let arr = ["I", "go", "home"];

// delete arr[1]; // remove "go"

// alert( arr[1] ); // undefined

// // now arr = ["I",  , "home"];
// alert( arr.length ); // 3
// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // from index 1 remove 1 element

// alert( arr ); // ["I", "JavaScript"]

// // get the object at index 1 and then show its name
// alert( arr[1].name ); // John

// // get the function at index 3 and run it
// arr[3](); // hello


// let fruits = ["Apple", "Orange", "Plum"];

// alert( fruits[fruits.length-1] ); // Plum





// let fruits = ["Apple", "Orange", "Plum"];

// // same as fruits[fruits.length-1]
// alert( fruits.at(-1) ); // Plum




// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", "dance");

// alert( arr ) // now ["Let's", "dance", "right", "now"]



// let arr = ["I", "study", "JavaScript"];

// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// alert( arr ); // "I", "study", "complex", "language", "JavaScript"


// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(-1, 0, 3, 4);

// alert( arr ); // 1,2,3,4,5