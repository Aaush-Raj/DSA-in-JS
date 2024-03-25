
// BELOW ARE FEW GOOD QUESTIONS RELATED TO SUBSEQUENT OF ARRAY , SOLVED WITH RECURSION 



// Q --->  generate all subsequences (also known as powerset) of an array


// TIME COMPLEXITY = O(2^n) as we are creating 2 recusion calls :This is because each element has two choices (either to be included in the subsequence or not),
// SPACE COMPLEXITY = O(n) as the maximum depth of recursion tree depends on the length of array 

function findSubSequence(arr,subSequence,pointer){

    if(pointer ==arr.length){
      console.log( subSequence)
      return
    }
  
    // not-take
    findSubSequence(arr,subSequence,pointer+1)
  
    //take
    subSequence.push(arr[pointer]);
    findSubSequence(arr,subSequence,pointer+1)
    subSequence.pop()
    
  
  }
  
  const arr = [3,1,2];
  
  findSubSequence(arr,[],0)





///// Q -  Find the SubSequence of array who's sum = target value


function sum_of_subSeq_array(arr, subSequence, pointer, sum) {
    if (pointer == arr.length) {
      if (sum == target) {
        console.log(subSequence);
      }
  
      return;
    }
  
    // not-take
    sum_of_subSeq_array(arr, subSequence, pointer + 1, sum);
  
    //take
    subSequence.push(arr[pointer]);
    sum += arr[pointer];
    sum_of_subSeq_array(arr, subSequence, pointer + 1, sum);
    subSequence.pop();
    sum -= arr[pointer];
  }
  
  const arr_2 = [3, 1, 2, 4];
  const target = 4;
  
  sum_of_subSeq_array(arr_2, [], 0, 0);
  



// Q --RETURN THE FIRST SUBSEQUENT WHOES SUM === TARGET

function sum_of_subseq_first_val(arr, target, pointer, subSequentArray, sum) {
    if (pointer == arr.length) {
      if (sum == target) {
        console.log(subSequentArray)
        return true}
      else {
        return false;
      }
    }
  
    //take
    subSequentArray.push(arr[pointer]);
    sum += arr[pointer]
    if (sum_of_subseq_first_val(arr, target, pointer + 1, subSequentArray, sum) == true){
      return true;
    }
    subSequentArray.pop(arr[pointer]);
    sum -= arr[pointer]
  
    //no-take
  
  if (sum_of_subseq_first_val(arr, target, pointer + 1, subSequentArray, sum)==true)return true
  
  return false
  }
  const arr_3 = [1, 2, 4, 3];
  const tgt = 4;
  sum_of_subseq_first_val(arr_3, tgt, 0, [], 0);
  


// return the COUNT of subsequent who's sum == target value:

function sum_of_subseq_count(arr, target, pointer, sum) {
    if (pointer == arr.length) {
      if (sum == target) {
        return 1;
      } else {
        return 0;
      }
    }
  
    //take
    // subSequentArray.push(arr[pointer]); // we dont need  subSequentArray anymore as we just have to show the count of subSequentArray who's sum == target
    sum += arr[pointer];
    const first = sum_of_subseq_count(arr, target, pointer + 1, sum) 
    // subSequentArray.pop(arr[pointer]);
    sum -= arr[pointer];
  
    //no-take
  
    const second = sum_of_subseq_count(arr, target, pointer + 1, sum) 
  
    return first+second;
  }
  const arr_4= [1, 2, 4, 3,2];
  const tgt_4 = 4;
  console.log(sum_of_subseq_count(arr_4, tgt_4, 0, 0))