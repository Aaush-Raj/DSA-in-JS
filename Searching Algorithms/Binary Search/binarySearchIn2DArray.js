
// DOING BINARY SEARCH IN A 2D array WHERE ROWS AND COLUMNS ARE SORTED 

let searchMatrix = (matrix, target) => {
    let row = 0;
    let column = matrix.length - 1;
  
    while (row <= matrix.length-1 && column >= 0) {
      if (matrix[row][column] == target) {
        return [row, column];
      }
  
      if (matrix[row][column] > target) {
        column--;
      } else {
        row++;
      }
    }
  
    return [-1, -1];
  };
  
  const matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17],
  ];
  
  const target = 10;
  console.log(searchMatrix(matrix, target)); // Output: true
  