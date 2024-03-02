

// Q -
// *
// **
// ***
// ****
// *****

function pattern1(n) {
    for (let i = 0; i <= n; i++) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += "*";
      }
      console.log(row);
    }
  }
  
  pattern1(5);



// Q --
// *****
// ****
// ***
// **
// *

function pattern2(n) {
    for (let i = n; i >= 0; i--) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += "*";
      }
      console.log(row);
    }
  }
  
  pattern2(5);
  
  