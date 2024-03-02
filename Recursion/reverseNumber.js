// Q-> REVERSE A GIVEN NUMBER : EXAMPLE: 1234->4321



let outputNumber = 0;

function reverseNum(n){
  if (n==0){
    return outputNumber;
  }

  let lastDigit = n % 10;
  let remainingDigit = Math.floor(n/10);
  console.log(remainingDigit)

  outputNumber = outputNumber * 10 + lastDigit;
  reverseNum(remainingDigit);
};

let number = 1234
reverseNum(number);
console.log(outputNumber);



// easy solution for the above question

function reverseInt(n,t=0) {

    if (n===0)return t;
     t = (t*10)+(n%10);
    return checkPalindrome((Math.floor(n/10)),t);
    
  }
  
  let num = 123456789;
  let reversed_value = reverseInt(num);
  console.log(reversed_value)
