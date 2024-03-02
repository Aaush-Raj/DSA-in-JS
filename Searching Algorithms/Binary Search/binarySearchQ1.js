


// FIND FIRST AND LAST OCCURANCE INDEX OF THE TARGET VALUE

function search(arr, target, isFirstInd) {
    let start = 0;
    let end = arr.length - 1;
  
    let occurance = -1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (target > arr[mid]) {
        start = mid + 1;
      } else if (target < arr[mid]) {
        end = mid - 1;
      } else {
        occurance = mid;
  
        if (isFirstInd === true) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
  
    return occurance;
  }
  
  function main() {
    let target = 9;
    let arr = [1, 2, 5, 9, 9, 9, 9, 5, 6, 8, 9, 9, 6, 9]; //EXPECTED OUTPUT = [3,13]
  
    let startingIndex = search(arr, target, true);
    let endIndex = search(arr, target, false);
  
    return [startingIndex, endIndex];
  }
  
  console.log(main());
  