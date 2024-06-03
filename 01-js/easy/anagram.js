/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var n1 = str1.length;
  var n2 = str2.length;
  if (n1 !== n2) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const str1Arr = str1.split('').sort();
  const str2Arr = str2.split('').sort();

  return str1Arr.every((char, index) => char === str2Arr[index]);

}

module.exports = isAnagram;
