// find the Target value from the Array and return its index



// BRUTE FORCE SOLUTION :
// TIME COMPLEXITY HERE IS O(n2) nSquare 
// SPACE COMPLEXITY HERE IS 0(1)

let nums = [1,2,1, 5, 5, 6]
let targetValue = 2

let targetFounder = (arr,tv)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === tv) {
            return [i, j]
            }
        }
    }
}

console.log(targetFounder(nums,targetValue));




//  SOLUTION USING HASHTABLE 
//  TIME COMPLEXITY IS 0(n)
//  space Complexity is 0(n)

let targetFounderHashTable = (arr,tv)=>{
  let hashTable = {};
  let requiredVal;
for (let i = 0; i < arr.length; i++) {
  requiredVal = tv-arr[i];
  
  if(requiredVal in hashTable){
    return[hashTable[requiredVal],i]
  }
  else{
    hashTable[arr[i]] = i;
  }
}
}

console.log(targetFounderHashTable(nums,targetValue))

