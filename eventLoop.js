console.log("Start");

// Asynchronous task using setTimeout
setTimeout(() => {
  console.log("Inside setTimeout callback");
}, 5000);

// Synchronous task
console.log("End");

function longRunningOperation() {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  console.log(+result);
}

longRunningOperation();
