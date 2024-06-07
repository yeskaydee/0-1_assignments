// Function to delay for a given number of milliseconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to run the counter
async function counterWithAsyncAwait() {
    let count = 0;
    while (count <= 5) { // Adjust this condition as needed
        console.log(count++);
        // await delay(1000); // Wait for 1 second
        await new Promise (function(resolve){
            setTimeout(resolve,1000);
        })
    }
    return 'Counter finished';
}

// Run the counter
counterWithAsyncAwait().then(message => {
    console.log(message);
});
