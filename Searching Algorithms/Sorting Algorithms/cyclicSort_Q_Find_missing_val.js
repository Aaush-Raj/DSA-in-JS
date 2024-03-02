// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.


//Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.


// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.




function missingNumber(nums) {
    for (let i = 0; i < nums.length; ) {
      let correct = nums[i];
      if (nums[i] !== nums[correct]) {
        [nums[i], nums[correct]] = [nums[correct], nums[i]];
      } else {
        i++;
      }
    }
    return findMissingNumber(nums);
  }
  
  var findMissingNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i) {
        return i;
      }
    }
    return nums.length;//Just return n 
  };
  
//APPROACH NOT USING CYCLIC SORT HERE ITS JUST USING BITWISE OPERATOR;
function missingNumber(nums) {
    let missing = nums.length;
  
    for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i];
    }
  
    return missing;
  }