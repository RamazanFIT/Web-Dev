let user = new Object(); // "object constructor" syntax
user = {};  // "object literal" syntax

user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };


  console.log( user.name ); // John
  console.log( user.age ); // 30

  user.isAdmin = true;

  console.log(user)

  delete user.age;
  console.log(user)
user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };
user = {
name: "John",
age: 30,
}

user["likes birds"] = true;

console.log(user)


let fruit = ("apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log( bag.apple ); // 5 if fruit="apple"

fruit = ("apple");
bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

fruit = 'apple';
bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
user = makeUser("John", 30);
name = "Taa"
let a = {
    name, 
    age:30
}
console.log(a.name);

let obj = {
    0: "test" // same as "0": "test"
  };
  console.log( obj["0"] ); // test
  console.log( obj[0] ); // test (same property)  

obj = {};
  obj.__proto__ = 5; // assign a number
  console.log(obj.__proto__);

user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
  }

  let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes) {
    console.log( +code ); // 49, 41, 44, 1
  }
  let json = {
    '+47' : 12,
    '47' : 13
  }
  console.log(json["+47"])
  console.log(json["47"])

