const promise1 = Promise.resolve("One");
const promise2 = Promise.resolve("Two");
const promise3 = Promise.resolve("Three");

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: ['One', 'Two']
  })
  .catch((error) => {
    console.error(error);
  });
