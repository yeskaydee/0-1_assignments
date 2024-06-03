/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();

  let cleanStr = "";

  for (const element of lowerStr) {
    if (element.match(/[a-z]/gi)) {
      cleanStr = cleanStr + element;
    }
  }

  const reverseSortedStr = cleanStr.split("").reverse().join("");

  if (cleanStr === reverseSortedStr) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
