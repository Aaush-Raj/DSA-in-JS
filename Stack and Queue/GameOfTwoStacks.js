// THIS IS NOT A WORKING SOLUTION, I JUST TRIED THIS CODE AND ITS NOT TESTED  AND I DIDNT UNDERSTOOD THIS PROBLEM PROPERLY::

// PROBLEM :: GAME OF TWO STACKS ON HACKERRANK


function gameOfTwoStacks(s1,s2,sum,count){
    if (sum>maxSum){
      return count;
    }
    let ans1 = gameOfTwoStacks(s1.slice(1),s2,sum+s1[0],count+1);
    let ans2 = gameOfTwoStacks(s1,s2.slice(1),sum+s2[0],count+1);
  
    return Math.max(ans1,ans2);
  }
  
  const stack1 = [4,3,4,2,6,1]
  const stack2 = [2,4,3,5,1]
  const maxSum = 10
  console.log(gameOfTwoStacks(stack1,stack2,0,0))