

const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (min != i) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
      }
    }
    return array;
  };
  
  let arr = [23, 12, 34, 5, 2, 1, 3, 52, 1, 22];
  console.log(selectionSort(arr));
  