// Consider two strings, str1 and str2. Define a JavaScript function isomorphicChecker that 
// takes these two strings as input and determines if they are isomorphic. 
// // An isomorphic string is one where characters in str1 can be replaced to get str2 while preserving the order of characters. 
// // For instance, if str1 = "aacd" and str2 = "eegh", the function should return false, 
// // as it is not possible to map characters from str1 to str2 in a consistent manner.
// //  Implement the isomorphicChecker function using a hash table and a loop through the characters of both strings.

let str1 = "abcd";
let str2 = "efgh";

let isomorphicChecker = (str1, str2) => {
  let str1_hashTable = {};
  let str2_hashTable = {};

  if (str1.length != str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];

    if (!str1_hashTable[char1]) str1_hashTable[char1] = char2;
    if (!str2_hashTable[char2]) str2_hashTable[char2] = char1;

    if (str1_hashTable[char1] !== char2 || str2_hashTable[char2] !== char1)
      return false;
  }
  return true;
};

console.log(isomorphicChecker(str1, str2));
