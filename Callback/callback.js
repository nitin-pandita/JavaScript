// a callback is very help fo giving javascript it asynchronous nature

// console.log('Before');

// getCart(function() {
//     console.log('Shopping cart data has been loaded');
// })
// console.log('After');

const items = ["pants", "shirts", "socks", "shoes"];

// This will keep on going on and on and is called callback hell or pyramid of Dome
api.getItem(items, function () {
  api.proccedToPay(function () {
    api.checkout(function () {
      // this is called callback hell or pyramid of Dome
    });
  });
});
