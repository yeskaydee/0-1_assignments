const fs = require('fs');

fs.readFile('a.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
}

);

console.log('Middle of script');
var a =0;
for(i = 0; i < 1000000000; i++) {
    a++;
}

console.log('End of script');
