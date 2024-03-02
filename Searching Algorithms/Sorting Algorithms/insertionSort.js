


const insertionSort = (array)=>{

    for(let i = 0;i<=array.length-2;i++){
  
      for(let j = i+1;j>0;j--){
        if(array[j]<array[j-1]){
          [array[j], array[j - 1]] = [array[j - 1], array[j]];
        }
        else{
          //We already know that the Left side of J is sorted so no need to loop again and again ; if the j-1 is smaller then just break the Loop 
          break;
        }
  
      }
    }
    return array;
  
  };
  
  const arr = [5,3,4,1,2];
  console.log(insertionSort(arr));