//  FIND THE GIVEN TARGET IN MOUNTAIN ARRAY :: BITONIC ARRAY

// FIND THE PEAK IN A MOUNTAIN ARRAY(BITONIC ARRAY) EG : [1,2,3,4,3,2] , [1,4,7,3,2]

function searchPeak(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid + 1] > arr[mid]) {
        start = mid + 1;
      } else if (arr[mid + 1] < arr[mid]) {
        end = mid;
      }
    }
    return start;
  }
  
  function binarySearch(arr, target, start, end) {
    // THIS BINARY SEARCH SEARCHES IN ASCENDING AND DESCENDING ORDERED ARRAY! OTHERWISE YOU CANT SOLVE THIS PROBLEM WITH A NORMAL BINARY SEARCH FUNCTION
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found
      }
  
      if (arr[mid] < arr[mid + 1]) {
        // Increasing section
        if (arr[mid] > target) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        // Decreasing section
        if (arr[mid] > target) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    return -1; // Target not found
  }
  
  function main() {
    let arr = [1, 2, 3, 4, 59, 69, 79, 62, 52, 33, 1];
    let target = 33;
    let peak = searchPeak(arr);
  
    let firstTry = binarySearch(arr, target, 0, peak);
    if (firstTry !== -1) {
      return firstTry;
    } else {
      // Corrected line: directly return the result of the binary search on the right side
      return binarySearch(arr, target, peak + 1, arr.length - 1);
    }
  }
  
  console.log(main());
  