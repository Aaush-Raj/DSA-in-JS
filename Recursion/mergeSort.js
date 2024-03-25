

// const mergeSortedArrays = (arr1,arr2)=>{

//     const newArray = []
//     for (let i = 0;i<arr1.length;i++){
//         for (let j = 0;j<arr1.length;j++){
//             if(arr1[i]<arr2[j]){
//                 newArray.push(arr2[j]);
//                 j++;
//             }
//             else{
//                 newArray.push(arr1[i]);
//                 i++
//             }
      
//     }

// }

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
  