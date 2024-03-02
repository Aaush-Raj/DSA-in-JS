// Q CODING LINEAR SEARCH HERE:::

// Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element 
// of a list until the desired element is found,
//  otherwise the search continues till the end of the data set.

function linearSearch(arr,tgt){

    if (arr.length === 0) return "ARRAY NOT VALID" ;

    for(let i=0;i<arr.length;i++){

        if (arr[i]===tgt){
            return i ;
        }
    }

    // BELOW is another way of doing linear search with enhanced Forloop!
    // let index = 0;

    // for (const i of arr) {
    //   if (i === tgt) {
    //     return index;
    //   }
    //   index++;


    return "NO MATCH FOUND!" ;
};
let array  = [1,23,4,21,34,222,45,68,77,89,999]
let = target = 999;
console.log(linearSearch(array,target));





// Q FLAT ARRAY LINEAR SEARCH !
const flatAryFinder = (array,tgt) => {

    for(let row = 0;row<array.length;row++){
      for (let col = 0;col<array[row].length;col++){
        if (array[row][col] === tgt){
          console.log([row,col]);
          return true;
        }
      }
    }
  
    return false;
  };
  
  const flatAry = [
    [1, 2, 4],
    [1, 44, 67, 678],
    [44, 55, 66, 88, 99],
  ];
    const tgt = 99;
  console.log(flatAryFinder(flatAry,tgt));
  