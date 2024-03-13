function a() {
  c();
  var b = 10;
  function c() {
    console.log(b);
  }
}

a();


// Scoping is declared at the time of function creation and not at the time of function execution. 