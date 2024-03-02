


  function cyclicSort(array) {
    for (let i = 0; i < array.length;) {
      if (array[i] !== i + 1) {
        
        const correctIndex = array[i] - 1;
        [array[i], array[correctIndex]] = [array[correctIndex], array[i]];
      } else {
        i++;
      }
    }
    return array;
  }
  
  const arr2 = [5, 1, 3, 4, 2];
  console.log(cyclicSort(arr2));
  


// Sort an Array using cyclic sort (1-n)
function cyclicSort(nums) {
    let i = 0
    let n = nums.length
    while (i < n) {
      const j = nums[i] - 1
      if (nums[i] !== nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      } else {
        i++
      }
    }
    return nums
  }
  const arr1 = [1, 2, 4, 5, 6, 3]
  const sortedArray = cyclicSort(arr1)
  console.log(sortedArray)
  


