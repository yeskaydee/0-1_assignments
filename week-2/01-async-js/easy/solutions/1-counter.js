// We have already covered this in the second lesson, but as an easy 
// recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

async function counter() {
  let count = 0; // Initialize counter

  // Function to increment and display the counter
  const increment = () => {
    console.log(count++);
  };

  // Use setInterval in combination with a Promise to wait for 1 second intervals
  await new Promise((resolve) => {
    const intervalId = setInterval(() => {
      increment();
    }, 1000);
  });
}

// Call the counter function
counter();

// Define a function to implement the counter using just promises and setInterval
// function counterWithPromises() {
//     let count = 0; // Initialize counter
  
//     // Return a new promise
//     return new Promise((resolve) => {
//       // Use setInterval to increment and log the counter every second
//       console.log("Inside the loop");
//       const intervalId = setInterval(() => {
//         console.log(count++);
  
//         // Optionally, clear the interval and resolve the promise after a certain condition is met
//         if (count > 10) {
//           clearInterval(intervalId);
//           resolve();
//         }
//       }, 1000);
//     });
//   }
  
//   // Call the function and handle the promise
// console.log("Outside the loop");
//   counterWithPromises().then(() => {
//     console.log('Counter finished.');
//   });