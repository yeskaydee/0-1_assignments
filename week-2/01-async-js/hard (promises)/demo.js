function busyWait(milliseconds) {
    return new Promise((resolve) => {
        const endTime = Date.now() + milliseconds;
        while (Date.now() < endTime) {
            // Busy-waiting, blocking the thread
        }
        resolve();
    });
}

console.log('Waited for 0-0 second');
// Usage
busyWait(10000).then(() => {
    console.log('Waited for 10 second');
});
console.log('Waited for 0 second');