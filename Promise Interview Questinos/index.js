// Promise.all()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 is reject");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 is Reject");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 is reject");
  }, 5000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

//? Promise.all will wait for all promise and if any one was not fulfilled then it quickly gives the error

//* Promise.allSettle will wait for all promise and if any one of the promise is not resolved it will still run and at the end give us the resolve as well as the rejected promise

//? Promise.race : this will give me the first settled value only and if the promise was rejected it will return the error of first settled value

//* Promise.any:It will wait for any successful call and return the first successful Promise and if all the promise were rejected it wil give us a Aggregate Error for all Promise
