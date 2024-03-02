// Q Linear search which return the index of multiple target elements!
// In this approach, we are creating an array 'result' inside the recursive function and returning that only! 



function linearSearch(array, target, start = 0) {
    let result = [];
    if (start == array.length) { return result };
    // return array[start]===target|| linearSearch(array,target,start+1)
    if (array[start] === target) {
      result.push(start);
    };
  
    return result.concat(linearSearch(array, target, start + 1));
  
  
  }
  
  console.log(linearSearch([1, 2, 3, 4, 525, 525, 525, 525], 525))
  
  