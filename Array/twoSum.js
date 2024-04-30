


//https://leetcode.com/problems/two-sum/

// a easy approach is to have 2 Loops one from i-length of arr , second from i-length of arr to check all possibilities of sum, But that will give a Time Complexity of O(n^2) nSquare

// This approach uses hashMap and takes O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {}
    let result = []
    for(let i =0;i<nums.length;i++){
        let requiredVal = target - nums[i]
       if(requiredVal in hashMap){

        result.push(hashMap[requiredVal])
        result.push(i)
       }
       hashMap[nums[i]] = i;
    }
    return result
};