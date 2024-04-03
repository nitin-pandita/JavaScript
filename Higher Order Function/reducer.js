// now we will be using the reducer Higher order function

const arr = [51, 6, 2, 41, 1];

//? reduce -> sum or max

// creating a simple function for sum

const MaxElement = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

// console.log(MaxElement(arr));

// let try to perform this task using the reducer function
// acc -> accumulator and curr -> current value
// TODO - > Take two parameters one is a callback function and other is the value
const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }

  return max;
}, 0);

console.log(output);

const user = [
  { firstName: "Nitin", lastName: "Pandita", age: 21 },
  { firstName: "Kartik", lastName: "Pandita", age: 23 },
  { firstName: "Raju", lastName: "Pandita", age: 21 },
  { firstName: "Mohit", lastName: "Pandita", age: 22 },
];

const output1 = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(output1);

const output2 = user
  .filter(function (x) {
    if (x.age === 21) {
      return x.firstName;
    }
  })
  .map((x) => x.firstName);

console.log(output2);
