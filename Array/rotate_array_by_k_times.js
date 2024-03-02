// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]



function reverseArray(nums, left, right) {
    while (left < right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }
  
  function rotateArray(nums, k) {
    const size = nums.length;
    k = k % size;
  
    if (k === 0) {
      return nums; // No rotation needed
    }
  
    reverseArray(nums, 0, size - 1);
    reverseArray(nums, 0, k - 1);
    reverseArray(nums, k, size - 1);
  
    return nums;
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const rotations = 12;
  
  console.log(rotateArray(arr, rotations));
  



  //Another method to rotate array with Inbuild JavaScript fucntions is to use SLice and Concat

  function rotateRight(arr, k) {
    const n = arr.length;
    const rotations = k % n;
  
    if (rotations === 0) {
      return arr; // No rotation needed
    }
  
    const splitIndex = n - rotations;
    const rotatedArray = arr.slice(splitIndex).concat(arr.slice(0, splitIndex));
    return rotatedArray;
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  const k = 2;
  const rotated = rotateRight(myArray, k);
  console.log(rotated); // Output: [4, 5, 1, 2, 3]
  