// GIVEN AN Array, FIND THE SECOND LARGEST NUMBER IN THAT ARRAY!
// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5



const arr= [25,101,35,22,9,1929,2393,1000000,2000000];

function findNum(numbers){
  
let largest = Number.NEGATIVE_INFINITY; /* This gives the lowest value or say most negetive value js can hold */
let secondLargest = Number.NEGATIVE_INFINITY;

for(let i =0;i<numbers.length;i++){

  if (numbers[i]>largest){
    secondLargest = largest;
    largest = numbers[i];
  }
  else if(numbers[i]!==largest && numbers[i]>secondLargest){
 secondLargest = numbers[i];
}
  
}
  return secondLargest
}
console.log(findNum(arr))