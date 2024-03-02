
// Q- return the product of all the digit in given Numbers;
// example: n=1234 then return 1+2+3+4 i.e 10; 


function sumOfDigits(n){
    if (n===0){
      return 0;
    };
    
    return (n%10)+(sumOfDigits(Math.floor(n/10)));
  
  }
  
    console.log(sumOfDigits(1234))


// SIMPLE LOGIC OF N%10 and n/10 is :::
// n%10 will  return the last digit of the number eg: 123%10 = 3;
// n/10 will  return the  rest of digit of the number eg: 123/10 = 12;
