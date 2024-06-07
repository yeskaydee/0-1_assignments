const fs = require('fs');

function PromiseFn(){
    return new Promise(function (resolve){
      fs.readFile('a.txt', 'utf8', (err, data) => {
        if (err) {
          resolve(err);
          return;
        }
        resolve(data);
      }          
      );
    })
}

PromiseFn();
console.log("this is a "+PromiseFn());

function readFn(data){
    console.log(data);
}

async function main(){
  let data = await PromiseFn();
  readFn(data);
}
main();
console.log("Reading file...");