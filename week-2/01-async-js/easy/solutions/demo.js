function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
    console.log('Start');
    await delay(2000); // Wait for 2 seconds
    console.log('2 seconds later');
    await delay(3000); // Wait for another 3 seconds
    console.log('3 more seconds later');
}

example();
a