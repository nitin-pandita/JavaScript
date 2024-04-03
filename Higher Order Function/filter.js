const arr = [4, 5, 62, 2, 4, 1, 0];

const LessThan4 = (x) => {
  return x >= 4;
};

const output = arr.filter(LessThan4);

console.log(output);
