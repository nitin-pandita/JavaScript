//* Promises are a way to handle asynchronous operation in javascript. It is an object that may produce a single value some time in the future: either a resolved value or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

// 1. Creating a Promise

//
const userData = fetch("https://api.github.com/users/nitin-pandita");

// userData is a async operation that will return a promise object

console.log(userData);

// 2. Consuming a Promise
// A promise object has two methods then() and catch() that can be used to consume the promise object.
userData.then((response) => {
  console.log(response);
});

const profile = document.getElementById("profile");
profile.innerHTML = `<h1>${userData.url}</h1>`;
