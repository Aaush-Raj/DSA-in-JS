// A very simple mistake that I have done sometime is (n--) and (--n);

function test(n){
    console.log(n)
  }
  let n = 10
  test(--n) // the n passed is 10-1 = 9! 
  test(n--)// the n passed is 10 then it got 10-1 = 9! DONT USE THIS AT PLACE OF n-1
  console.log(n)