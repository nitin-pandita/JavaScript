function DownSideTriangle(n) {
  let string = "";

  for (let i = 0; i < n - 1 + 1; i++) {
    // reducing the rows
    for (let j = i; j < n; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

DownSideTriangle(5);
