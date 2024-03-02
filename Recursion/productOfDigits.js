
// Q- return the product of all the digit in given Numbers;
// example: n=1234 then return 1X2X3X4 i.e 24; 

function sumOfDigits(n) {
    if (n % 10 == n) {
      return n;
    };
  
    return (n % 10) * (sumOfDigits(Math.floor(n / 10)));
  
  }
  console.log(sumOfDigits(2234))
  


// SIMPLE LOGIC OF N%10 and n/10 is :::
// n%10 will  return the last digit of the number eg: 123%10 = 3;
// n/10 will  return the  rest of digit of the number eg: 123/10 = 12;
