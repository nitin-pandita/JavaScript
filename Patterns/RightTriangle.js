function RightTriangle(n) {
  var string = "";

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

RightTriangle(5);
