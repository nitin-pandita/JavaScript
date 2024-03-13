// function x() {
//   var b = 10;

//   function y() {
//     console.log(b);
//   }
//   y();
// }

// x();

// ? returning a function
// function x() {
//   a = 7;

//   function y() {
//     console.log(a);
//   }

//   return y;
// }

// var z = x();
// console.log(z);

// z();

// ! Nested function
function grandFather() {
  var housePriceOfGrandFather = 10;
  function Father() {
    var housePriceOfFather = 100;
    function children() {
      console.log(housePriceOfFather, housePriceOfGrandFather);
    }
    children();
  }
  Father();
}
grandFather();
