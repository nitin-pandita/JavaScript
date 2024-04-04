const p = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hey the Promise is resolved!!");
  }, 10000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hey the Promise is resolved!!");
  }, 4000);
});

// difference between the async and await function vs the normal promise handle function.

// let see the async await function feature

async function resolvePromise() {
  console.log("Before the promise is resolved");
  const data = await p; // means it will not work until the promise gets fulfilled
  console.log("Will be printed after the Data is present");
  console.log(data);

  const data2 = await p2; // means it will not work until the promise gets fulfilled
  console.log("Another Promise");
  console.log(data2);
}

resolvePromise();
