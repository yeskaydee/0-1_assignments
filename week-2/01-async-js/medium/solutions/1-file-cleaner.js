// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
const fs = require("fs");

function fileReader() {
  return new Promise(function (resolve) {
    fs.readFile("file.txt", "utf8", (err, data) => {
      if (err) {
        resolve(`${err}`);
      } else {
        resolve(`${data}`);
      }
    });
  });
}

async function main() {
  let fromFile = await fileReader();
  console.log("Original Content:");
  console.log(fromFile);
  let wordArray = fromFile.split(" ");
  let filteredArray = wordArray.filter((word) => word !== "");
  let finalString = filteredArray.join(" ").trim();
  console.log("Cleaned Content:");
  console.log(finalString);

  //   #################  IMPORTANT  ##############################
  await fs.promises.writeFile("file.txt", finalString);
  console.log("Written successfully");
  //   #################  IMPORTANT  ##############################
}

main();
