
//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// similar to TwoSum question but the Change is , Index of the Array is starting from 1 and
// we get a sorted ascending order Array, so we are utilizing the advantage of Ascending array

// as we know ascending array hai toh if current sum > target then aage ki values badi hi hongi array me ,
//  so we reduce right by -1 , same when target is greater than current sum then we Increase the left pointer 
// because we know the next number is going to be greate than left pointer so we might get Target there



/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[left] + numbers[right] == target) {
            break
        }
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else {
            left++
        }


    }
    return [left + 1, right + 1]
};