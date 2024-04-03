function HollowSquare(n) {
  let string = ""; // it has its own scope

  for (let i = 0; i < n; i++) {
    // row
    for (let j = 0; j < n; j++) {
      // col
      if (i == 0 || i == n - 1) {
        string += "*";
      } else {
        if (j == 0 || j == n - 1) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  console.log(string);
}

HollowSquare(5);
