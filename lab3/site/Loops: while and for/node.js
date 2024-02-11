// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

// for(let i = 0; i < 10; i++){
//     alert(i + 12);
// }


// for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Value at coords (${i},${j})`, '');
  
//       // what if we want to exit from here to Done (below)?
//     }
//   }
  
//   alert('Done!');


// label : 
// for(let i = 0; i < 10; i++){
//     if(i > 2) break label;
//     alert(i);
// }

// label: {
//     // ...
//     break label; // works
//     // ...
// }

// The postfix form:

// for (let i = 0; i < 5; i++) alert( i );

// The prefix form:

// for (let i = 0; i < 5; ++i) alert( i );


// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }


