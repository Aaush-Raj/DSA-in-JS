

// FIND THE TARGET IN A ROTATED SORTED ARRAY !!!!!

// Approach : we are first dividing array into two sub arrays through Pivot and then applying Binary Search on both the arrays!


function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
  
      if (mid < end && arr[mid] > arr[mid + 1]) {
        return mid;
      }
  
      if (mid > start && arr[mid] < arr[mid - 1]) {
        return mid - 1;
      }
  
      if (arr[mid] >= arr[start]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  function binarySearch(arr, target, start, end) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] > target) {
        end = mid - 1;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
  
  function main() {
    let arr = [200, 300, 400, 500, 60, 90, 150, 190];
    let pivot = findPivot(arr);
    let target = 400;
  
    /* TO FIND AN ELEMENT IN ROTATED SORTED ARRAY , WE WILL DIVIDE ARRAY IN TWO PARTS 
    ONE FROM THE PIVOT AND ONE UPTO THE PIVOT
    EG : ARRY = [200, 300, 400, 500, 60, 90, 150, 190];
    pivot = 500
    so our first array will be [200, 300, 400, 500]
    and another array will be [ 60, 90, 150, 190]
    BECAUSE Binary search only works on Sorted array but we are dealing with rotated array
     SO , we are just taking two sorted array from rotated array and then searching them one by one
    */
    let firstTry = binarySearch(arr, target, 0, pivot);
    if (firstTry === -1) {
      return binarySearch(arr, target, pivot + 1, arr.length - 1);
    } else {
      return firstTry;
    }
  }
  
  console.log(main());
  