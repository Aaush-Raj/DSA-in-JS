// Two Pointer Approach
function reverseArray(left, right, arr) {
  //base
  if (left >= right) {
    console.log(arr);
    return arr;
  }
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  return reverseArray(left + 1, right - 1, arr);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(0, arr.length - 1, arr));

//Signle Pointer approach
// here we are using only one pointer i.e 'i' and for the right value we are doing
//  (arr.length-1- i) because right pointer will move to left , 
// so by reducing i from array's length we are moving it to left!

const reverseArray_single_pointer = (i, len, arr) => {
  //base
  if (i >= len / 2) {
    return arr;
  }
  let temp = arr[i];
  arr[i] = arr[len - i]; //arr[len - i] this is our right pointer!
  arr[len - i] = temp;
  return reverseArray(i + 1, len, arr);
};

const arr_new = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(reverseArray(0, arr_new.length - 1, arr_new));
