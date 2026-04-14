//call back hell

//lets take example of domino`s

function placeOrder(callback) {
  console.log("Talking with Domonio`s.....");
  setTimeout(() => {
    console.log("order placed successfully.");
    callback();
  }, 2000);
  
}
function preparingOrder(callback) {
  console.log("Preparing pizza started.....");
  setTimeout(() => {
    console.log("Pizza preparation done.");
    callback();
  }, 5000);
}
function pickupOrder(callback) {
  console.log("Reaching resturent for picking order...");
  setTimeout(() => {
    console.log("Order had picked up by delivery boy.");
    callback();
  }, 4000);
}
function deliverOrder(callback) {
  console.log("Delivery is on the way...");
  setTimeout(() => {
    console.log("Ordered dilivered successfully.");
    callback();
  }, 3000);
}
function rating()
{
  console.log("Give rating us from one to 5");
  setTimeout(()=>{
    console.log("Thanks for rating,we are waiting for another order!");
  },3000);
}

//now call back ka hell chalu hoga....
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder(()=>{
              rating()
            });
        })
    });
})
