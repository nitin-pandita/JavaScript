function LeftTriangle(n) {
  let string = "";

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

LeftTriangle(5);
