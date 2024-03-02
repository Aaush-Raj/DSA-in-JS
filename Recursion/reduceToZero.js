//Q-- reduce a number to 0 and return how many steps it took to reduce it to zero

// NOTE : If number is even then divide it by 2 and increase step by 1
// or 
// If the number is odd then minus it by 1 and increase step by 1


function reduceToZero(n, steps = 0) {
    if (n === 0) {
      return steps;
    }
    if (n % 2 === 0) {
      return reduceToZero(n / 2, ++steps);
    }
    else {
      return reduceToZero(n - 1, ++steps);
    }
  };
  
  number = 100;
  console.log(reduceToZero(number));