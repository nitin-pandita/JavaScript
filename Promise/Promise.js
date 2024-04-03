const cart = ["shoes", "shirt", "pant"];

// consuming of a promise
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
    //   processOrderToPayment(orderId);
  })
  //?   promise chaining
  .then(function (orderId) {
    return paymentSuccessful(orderId);
  })
  .then(function (paymentDetails) {
    console.log(paymentDetails);
  })
  .catch(function (err) {
    console.log(err.message);
  });
// creating of a promise
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // an error we will throw reject else we will throw resolve
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function paymentSuccessful(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful!!");
  });
}

function validateCart(cart) {
  return true;
}
