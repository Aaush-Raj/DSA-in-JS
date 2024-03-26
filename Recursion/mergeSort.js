
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    // Recursively sort the two halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements and merge
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add remaining elements from both arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Example usage
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(unsortedArray);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);
  





  // EASY IMPLEMENTATION OF MERGE SORT WITH SHIFT ARRAY FUNCTION, IT MAKES IT EASIER TO HANDLE THE MERGE PART OF SORTING
//  https://youtu.be/wXZyuJqNk9U?si=XQLHqq-fOD-53keW  WATCH THIS FOR CLEARITY!

  function mergeSort(arr ) {
    if(arr.length <2)return arr;
    const mid = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0,mid);
    const rightArray = arr.slice(mid);
  
    return mergeSortedArrays(leftArray, rightArray);
  }
  
  function mergeSortedArrays(leftArray, rightArray){
  
    let sortedArray = [];
    while (leftArray.length && rightArray.length){
      if (leftArray[0]<rightArray[0]){
        sortedArray.push(leftArray.shift())
      }
      else{
        sortedArray.push(rightArray.shift())
      }
    }
    return [...sortedArray,...leftArray,...rightArray]
  }
  const arr = [12, 3, 4, 1, 32, 1, 2, 3, 3, 44, 90, 20];
  
  console.log(mergeSort(arr, 0, arr.length - 1));
  