

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.


// soltuin :: https://www.youtube.com/watch?v=9QOHkW-ZrVE&ab_channel=AndyGala

var permuteUnique = function(nums) {

    function findUniquePermutations(nums,index){
        if(index == nums.length){
            result.push([...nums]);
            return;
        }


        let hash = {} //using a hashMap to store the Nums so that we dont hit duplicate
        for (let i = index;i<nums.length;i++){
            if (hash[nums[i]])continue; //if nums already in hashMap then no need to proceed.
            hash[nums[i]] = true;
            swap(nums,index,i)
            findUniquePermutations(nums,index+1)
            swap(nums,index,i)



        }
    }
    
    const result =[]
    findUniquePermutations(nums,0)
    return result;


    function swap(nums,first,second){
        let temp = nums[first];
        nums[first] = nums[second]
        nums[second] = temp
    }
};