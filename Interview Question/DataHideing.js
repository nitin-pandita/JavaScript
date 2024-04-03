// var count = 0;

// function Counter() {
//   count++;
// }

// Counter();
// * what happen here is we can access the count from anywhere because it is in the global scope so it can be accessed by anyone and can be changed by anyone
// console.log(count);

// so here comes the concept of data hiding

//* instead of using the global scope we can use the IIFE (Immediately Invoked Function Expression ) to hide the data

function Counter() {
  var count = 0;

  function IncrementCounter() {
    count++;
    console.log(count);
  }
  return IncrementCounter;
}

var counter = Counter();
counter();
counter();

// if we create a new variable counter2 and call the Counter function then it will create a new instance of the count variable and will not affect the previous count variable

var counter2 = Counter();
counter2();
