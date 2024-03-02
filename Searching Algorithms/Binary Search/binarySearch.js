

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] > target) {
        end = mid - 1;
      } 
      else if (arr[mid] < target) {
        start = mid + 1;
      }
       else {
        return mid;
      };
      
    }
    return "NO MATCH FOUND!";
  }
  
  let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];
  let tgt = 27;
  console.log(binarySearch(arr, tgt));
  