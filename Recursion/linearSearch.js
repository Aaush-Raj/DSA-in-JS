//  Q -  Do linear search with recursion
//  Linear search is the basic search in while you have to check all the elements of an array one by one 

function linearSearch(array,target,start=0){
    if(start==array.length){return false};
    return array[start]===target|| linearSearch(array,target,start+1) //this returns true or false
    
  }
  
  console.log(linearSearch([1,2,3,4,5,6,7,55,4],525))
  
  