
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true


// solution https://www.youtube.com/watch?v=sqWOFIZ9Z0U&ab_channel=NeetCodeIO

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            isIncreasing = false; // Found a decrease, can't be increasing
        }
        if (nums[i] < nums[i + 1]) {
            isDecreasing = false; // Found an increase, can't be decreasing
        }
    }

    // The array is monotonic if it is either entirely non-increasing or non-decreasing
    return isIncreasing || isDecreasing;
};
