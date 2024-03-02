// Q HOLLOW PYRAMID
// *****
// *  *
// * *
// *

function printHollowInvertedHalfPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
      let row = "";
  
      // Add spaces before the first asterisk
      for (let space = 1; space <= rows - i; space++) {
        row += " ";
      }
  
      // Add asterisks for the first and last columns, and spaces for the rest
      for (let j = 1; j <= i; j++) {
        // console.log(j,i,rows)
        if (j === 1 || j === i || i === rows) {
          row += "*";
        } else {
          row += " ";
        }
      }
  
      console.log(row);
    }
  }
  
  // Example usage:
  printHollowInvertedHalfPyramid(10);
  