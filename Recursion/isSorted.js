// Q-  CHECK IF AN ARRAY IS SORTED OR NOT RETURN TRUE OR FALSE ACCORDINGLY!

function isSorted(arr, start = 0) {
    if (start == arr.length - 1) return true;
    return arr[start]<arr[start + 1] && isSorted(arr, start + 1);

    // The below code is the explanation or expanded version of the above return statement

    // if (arr[start] < arr[start + 1]) {
    //   return isSorted(arr, start + 1);
    // }
    // else {
    //   return false
    // }
  
  
  }
  
  console.log(isSorted([1, 2, 3, 4, 5])); // true
  console.log(isSorted([1, 2, 4, 3, 5])); // false