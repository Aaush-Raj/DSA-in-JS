//BEFORE BRAINSTORMING WITH RECTANGLE OF HISTOGRAM QUESTION, LETS UNDERSTAND A SMALL QUESTION WHICH WILL HELP TO BUILD THE INTITUTION FOR THE RECT QUESTION

// FIND NEXT SMALLER ELEMENT :
// [2,1,4,3] ==> [1,-1,3,-1] this is the index of all next smallers of the array



// IMPORTANT VIDEOS FOR REVISING THIS LOGIC:::
// https://youtu.be/lJLcqDsmYfg?si=WE44wKsnw8S9dzHy to underStand this logic
// https://youtu.be/nc1AYFyvOR4?si=ISwRxXy7zJz9tXfD




/**
 * @param {number[]} heights
 * @return {number}
 */

 
function nextSmallerElement(arr) {
    let stack = [];
    let result = [];
  
    stack.push(arr.length); // Rightmost boundary
    for (let i = arr.length - 1; i >= 0; i--) {
      let curr = arr[i];
      while (arr[stack[stack.length - 1]] >= curr) {
        stack.pop();
      }
      result[i] = stack[stack.length - 1];
      stack.push(i); // Push index
    }
    return result;
  }
  function prevSmallerElement(arr) {
    let stack = [];
    let result = [];
  
    stack.push(-1); // Leftmost boundary
    for (let i = 0; i < arr.length; i++) {
      let curr = arr[i];
      while (arr[stack[stack.length - 1]] >= curr) {
        stack.pop();
      }
      result[i] = stack[stack.length - 1];
      stack.push(i); // Push index
    }
    return result;
  }
  
  
  var largestRectangleArea = function(heights) {
      let maxArea = 0;
      let next = nextSmallerElement(heights);
      let prev = prevSmallerElement(heights);
      
      for(let i =0;i<heights.length;i++){
          // area of rect = l x b
          let length = heights[i]
          let breadth = next[i] - prev[i] -1
  
          let currArea = length*breadth
  
          if(currArea>maxArea){
              maxArea =currArea; 
          }
          
      }
      return maxArea;
  };
  




// alternate way to SOLVE THIS PROBLEM AND THIS IS WAY TOO TIME EFFECTIVE!!!


var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    let i = 0;
    
    while (i < heights.length) {
        if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
            stack.push(i);
            i++;
        } else {
            const top = stack.pop();
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, heights[top] * width);
        }
    }
    
    while (stack.length > 0) {
        const top = stack.pop();
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, heights[top] * width);
    }
    
    return maxArea;
};