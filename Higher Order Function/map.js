const arr = [3, 5, 7, 2];

const double = (x) => {
  return x * 2;
};

const triple = (x) => {
  return x * 3;
};

const binary = (x) => {
  return x.toString(2);
};
const output = arr.map(binary);

console.log(output);
