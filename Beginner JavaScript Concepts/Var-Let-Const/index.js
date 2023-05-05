console.clear();

/*************************************/
/***************SCOPE*****************/
/*************************************/
if (true) {
  let x = 5;
  console.log(x);
}
//console.log(x); //This will give error;

/*************************************/
/*********RE-ASSIGNMENT***************/
/*************************************/

if (true) {
  let x = 5;
  console.log(x);
  x = 6;
  console.log(x);
}

/*************************************/
/*********RE-DECLARATION**************/
/*************************************/

if (true) {
  let x = 5;
  console.log(x);
  // let x = 6;     This will throw error
  // console.log(x);
}

/*************************************/
/***DECLARATION WITHOUT ASSIGNMENT****/
/*************************************/

if (true) {
  let x;
  console.log(x);
  x = 6;
  console.log(x);
}

/*************************************/
/****************SCOPE****************/
/*************************************/
function add() {
  if (true) {
    var x = 10;
    console.log(x);
  }
  console.log(x);
}

//console.log(x); // This will throw error
add();

/*************************************/
/*********RE-ASSIGNMENT***************/
/*************************************/
function add() {
  if (true) {
    var x = 10;
    console.log(x);
  }
  x = 20;
  console.log(x);
}
add();

/*************************************/
/*********RE-DECLARATION**************/
/*************************************/
function add() {
  if (true) {
    var x = 10;
    console.log(x);
    var x = 20;
    console.log(x);
  }
  console.log(x);
}
add();

/*************************************/
/***DECLARATION WITHOUT ASSIGNMENT****/
/*************************************/
function add() {
  if (true) {
    var x;
    console.log(x);
  }
  x = 5;
  console.log(x);
}
add();

console.clear();

/*************************************/
/***************SCOPE*****************/
/*************************************/

if (true) {
  const x = 5;
  console.log(x);
}
//console.log(x); //This will give error;

/*************************************/
/*********RE-ASSIGNMENT***************/
/*************************************/
if (true) {
  const x = 5;
  console.log(x);
  // This will throw error
  //   x = 6;
  //   console.log(x);
}

/*************************************/
/*********RE-DECLARATION**************/
/*************************************/
if (true) {
  const x = 5;
  console.log(x);
  // This will throw error
  //  var x = 6;
  //  console.log(x);
}

/*************************************/
/***DECLARATION WITHOUT ASSIGNMENT****/
/*************************************/

if (true) {
  // This will throw error
  // const x;
  // console.log(x);
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers[1] = 10;
console.log(numbers);

let array = [2, 3, 4];
// numbers = array; //This will throw error
// numbers = [3, 4, 5]; // This will throw error

const person = {
  name: "John Doe",
  age: 30,
};

console.log(person);

person["gender"] = "male";
console.log(person);

// This will throw error
// person = {
//   name: "Jack",
// };
