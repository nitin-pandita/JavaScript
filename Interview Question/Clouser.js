function Outest() {
  var c = 90;
  function Outer() {
    var a = 10;
    function Inner() {
      console.log(a, c);
    }

    return Inner;
  }
}
// Double Close bracket say we are calling the Inner function
Outer()();
