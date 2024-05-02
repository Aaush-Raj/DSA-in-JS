

// Q -> https://leetcode.com/problems/remove-element/description/

// REMOVE ALL OCCURANCE OF VAL FROM NUMS , and RETURN THE NEW SIZE OF NUMS,
//  BUT U CANT MAKE ANOTHER ARRAY TO STORE VALUES 



/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    for(let i =0;i<nums.length;i++){
        if(nums[i] != val){
            nums[k] = nums[i]
            k++;
        }
    }
    return k
};



// ANOTHER JS SOLUTION FOR THIS IS:
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; ) {
        if (nums[i] === val) {
            nums.splice(i, 1); // Remove the element at index i
        } else {
            i++; // Only increment i if no element is removed
        }
    }
    return nums.length; // Return the new length of the array
};


// NOTE :: WE ARE  ONLY INCREMENTING I WHEN VALUE != CURRNTVALUE
//  BECAUSE, WHEN WE DO SPLICE IT CHANGES THE INDICES OF ARRAY !!!! So if we do i++ for every iteration , we might not check a few indices due to SPLICE