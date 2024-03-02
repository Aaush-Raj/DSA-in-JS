

// this is not particularly a question but I am just coding this concept as this is useful for any sithuation where::
// you want to find a PIVOT here in this
// The ARRAY given is Rotated Sorted array and we have to find the piovet i.e the greatest number in the arrya
// so we are just using simple checks to find the Pivot element

// NOTE : THE CHECK OF mid<end and mid>start are added to avoid conflict when lenght of array is only 1 ,that means 
// when only one element is left in the Array i.e mid start and end at same element so in that case we wont be able to find MID+1 or MID-1

function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
  
      if (mid<end && arr[mid] > arr[mid + 1]) {
        return mid;
      }
  
      if (mid>start && arr[mid] < arr[mid - 1]) {
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
  
  let arr = [200, 300, 400, 500, 60, 90, 150, 190];
  console.log(arr[findPivot(arr)]);
  console.log(findPivot(arr));
  