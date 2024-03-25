

//simple questiion , find factorial with recursion 2 approach,
//  one is parameter approach second is functional approach!

// parameter approach
// n=4; factorial = 4x3x2x1

const factorial = (n, fact) => {
    if (n <= 1) {
      return fact;
    }
    
    return factorial(n - 1, fact * n);
  };
  
  console.log(factorial(5, 1));

  
//functional approach
const funcFactorial = (n) => {
    if (n <= 1) {
      return 1;
    }
    
    return n*funcFactorial(n-1);
  };
  
  console.log(funcFactorial (5));
  