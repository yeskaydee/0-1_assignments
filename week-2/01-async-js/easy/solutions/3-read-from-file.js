// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');

// Asynchronously read from a file
async function reader (){
    return new Promise (function(resolve){
        fs.readFile('example.txt', 'utf8', (err, data) => {
          if (err) {
            resolve(`Error reading file: ${err}`);
          }
          else{
              resolve(`File content: ${data}`);
          }
        });

    })
}


function onDone(data){
    console.log(data);
}
    
reader().then(onDone);

// Simulate an expensive operation
let sum = 0;
for (let i = 0; i < 10000000000; i++) {
    sum += i;
}
console.log("Sum:", sum);