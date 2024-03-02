// FIND THE POSITION OF AN ELEMENT IN A SORTED ARRAY OF INFINITE NUMBERS!

function search(arr, target,start,end) {
    // let start = 0;
    // let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (target > arr[mid]) {
        start = mid + 1;
      } else if (target < arr[mid]) {
        end = mid - 1;
      } else {
        return mid;
      }
    }
  
    return "NO MATCH FOUND";
  }
  
  function main() {
    let target = 100005;
    let arr = [2, 3, 4, 5, 67, 88, 99, 101, 102, 1002, 10004, 100005];
  
    let start = 0;
    let end = 1;
  
    while (target > arr[end]) {
      let newStart = end + 1;
      end = end + (end - start + 1) * 2;
      start = newStart;
    }
    console.log(start, end)
    return search(arr, target, start, end);
  }
  
  console.log(main());
  