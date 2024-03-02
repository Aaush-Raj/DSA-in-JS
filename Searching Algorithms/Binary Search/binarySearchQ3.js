
// FIND THE PEAK IN A MOUNTAIN ARRAY(BITONIC ARRAY) EG : [1,2,3,4,3,2]-> 4 , [1,4,7,3,2]->7

// HERE THE WHILE CONDITION IS (start < end) so that when start and end are pointing at the same element we return that element as that's the peak

function search(arr) {
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
    return start;//returning start or end both is fine as both start and end are pointing to the same element !
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 6, 5, 3, 1];
  
  console.log(search(arr));
  