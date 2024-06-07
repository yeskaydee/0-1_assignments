// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs').promises;

async function writeFileAsync(filename, content) {
    try {
        await fs.writeFile(filename, content, 'utf8');
        console.log('File written successfully');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

// Usage
writeFileAsync('output.txt', 'Hello, this is some text!')
    .then(() => {
        console.log('Write operation complete');
    });

// Simulate an expensive operation
let sum = 0;
for (let i = 0; i < 100000000; i++) { // Increase loop to make it more expensive
    sum += i;
}
console.log('Sum:', sum);
