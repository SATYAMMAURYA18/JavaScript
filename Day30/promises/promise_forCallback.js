function placeOrder() {
  return new Promise((resolve, reject) => {
    console.log("Talking with Domino's.....");
    setTimeout(() => {
      console.log("Order placed successfully.");
      resolve();
    }, 2000);
  });
}

function preparingOrder() {
  return new Promise((resolve, reject) => {
    console.log("Preparing pizza started.....");
    setTimeout(() => {
      console.log("Pizza preparation done.");
      resolve();
    }, 5000);
  });
}

function pickupOrder() {
  return new Promise((resolve, reject) => {
    console.log("Reaching restaurant for picking order...");
    setTimeout(() => {
      console.log("Order has been picked up by delivery boy.");
      resolve();
    }, 4000);
  });
}

function deliverOrder() {
  return new Promise((resolve, reject) => {
    console.log("Delivery is on the way...");
    setTimeout(() => {
      console.log("Order delivered successfully.");
      resolve();
    }, 3000);
  });
}

function rating() {
  return new Promise((resolve, reject) => {
    console.log("Give rating us from 1 to 5");
    setTimeout(() => {
      console.log("Thanks for rating, we are waiting for another order!");
      resolve();
    }, 3000);
  });
}

placeOrder()
  .then(preparingOrder)
  .then(pickupOrder)
  .then(deliverOrder)
  .then(rating)
  .catch((err) => console.log("Error:", err));