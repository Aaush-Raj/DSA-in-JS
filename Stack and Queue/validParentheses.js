/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    let arr_of_s = s.split("");
    if(arr_of_s.length<2)return false
    let bracketEnds = {
      ")":"(",
    "}":"{",
     "]":"["
      }
    let openingBrackets = new Set(["{", "[", "("]);
    for (let i = 0; i < arr_of_s.length; i++) {
      if (openingBrackets.has(arr_of_s[i])) {
        stack.push(arr_of_s[i]);
      } else {
        let topOfStack = stack.pop();
        if (bracketEnds[arr_of_s[i]] != topOfStack) {
          return false;
        }
      }
    }
    return stack.length ==0;
  };
  
  
  