//* Function Statement also called function declaration
function a() {
  console.log("A is here");
}

// * Function Expression
var b = function () {
  console.log("B is here");
};

//* Anonymous Function
// function () {

// }

// * Named Function Expression
var c = function xyz() {
  console.log("C is here");
  xyz();
  // xyz is only accessible inside the function
};

// Difference between arguments and parameters
function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Sahil"); // Hello Sahil

// First Class Functions
var greet = function (param1) {
  return function () {
    console.log("Empty Function");
  };
};

console.log(greet("hi"));

greet(sayHello);
