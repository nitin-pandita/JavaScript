// this is the simple way of writing a function
const radius = [3, 5, 6, 1];

// * Higher Order Functions

const area = function (radius) {
  return Math.PI * radius * radius;
};

const calculateArea1 = (radius, area) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(area(radius[i]));
  }
  return output;
};
console.log("Map", radius.map(area));

// creating my onw map function
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
};
console.log("Own Map function", radius.calculate(area));

// console.log("Higher Order Output", calculateArea1(radius, area));

// simple way
const calculateArea = (radius) => {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));
