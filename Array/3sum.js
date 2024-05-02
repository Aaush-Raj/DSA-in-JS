




//Watch this if u feel lost again with this problem
//https://www.youtube.com/watch?v=BjTxjnq0_9A&ab_channel=basarat

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = []

    for (let i = 0; i < nums.length-2; i++) {
        if(i>0 && nums[i]===nums[i-1])continue;

        let left = i+1;
        let right= nums.length-1;

        while(left<right){
            let sum = nums[i]+nums[left]+nums[right]

            if(sum==0){
                result.push([nums[i],nums[left],nums[right]]);
                left++;
                while(nums[left]===nums[left-1] &&  left<right){
                    left++
                }
                
            }
            else if(sum < 0){
                left++

            }else{
                right--;
            }
        }
       
    }

    return result

};