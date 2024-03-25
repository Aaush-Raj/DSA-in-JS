// Check if the given number is palindrome : EG: 12321 is a palindrome!

// Palindrome problem can be easily solved by reversing the number and comparing with the original number

function checkPalindrome(n,t=0) {

    if (n===0)return t;

    // We are reversing the number here
     t = (t*10)+(n%10);
    return checkPalindrome((Math.floor(n/10)),t);
    
  }
  
  let num = 123456789;
  let reversed_value = checkPalindrome(num);
  console.log(reversed_value)
  if(num === reversed_value)console.log( true);
  else(console.log( false));



  const checkPalindrome_singlePointerApproach = (left, len) => {
    if (left >= len / 2) {
      return true;
    }
    if (word[left] === word[len - left]) {
      return checkPalindrome_singlePointerApproach(left + 1, len);
    } else {
      return false;
    }
  
    //
  };
  const word = "madam";
  
  console.log(checkPalindrome_singlePointerApproach(0, word.length - 1));
  