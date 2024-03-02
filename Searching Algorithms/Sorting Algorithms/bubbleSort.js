

const bubbleSort = (array) => {
    let isSorted;
  
    for (let i = 0; i < array.length - 1; i++) {
      isSorted = true;
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
          isSorted = false;
        }
      }
  
      if (isSorted) return array;
    }
  
    return array;
  };
  
  let arr = [21, 12, 55, 32, 33, 34, 35, 36];
  // let arr = [2,3,4,5,6,7,8,9,12,1];
  
  console.log(bubbleSort(arr));

//   BUBBLE SORT IS ADAPTIVE as It will return array as soon as rest of the elements seems to be sorted.
//   BUBBLE SORT IS STABLE !
  