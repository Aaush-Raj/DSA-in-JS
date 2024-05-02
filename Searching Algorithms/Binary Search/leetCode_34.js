

// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function binarySearchLeft(arr,target){
    let low = 0;
    let high = arr.length-1
    let mid;
    let index = -1

    while(low<=high){
        mid = low + Math.floor((high - low) / 2);
        if(arr[mid]>target){
            high = mid-1
        }
        else if(arr[mid] < target){
            low = mid+1
        }
        else{
            index = mid;
            high = mid-1
        }
    }

    return index
}


function binarySearchRight(arr,target){
    let low = 0;
    let high = arr.length-1
    let mid;
    let index = -1

    while(low<=high){
        mid = low + Math.floor((high - low) / 2);

        if(arr[mid]>target){
            high = mid-1
        }
        else if(arr[mid] < target){
            low = mid+1

        }
        else{
            index = mid;
            low = mid+1
        }
    }

    return index
}
var searchRange = function(nums, target) {

    let first = binarySearchLeft(nums,target);
    let last = binarySearchRight(nums,target);

    return [first,last]
};