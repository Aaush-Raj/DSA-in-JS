function printStars(row, column) {
    if (row === 0) return;
  
    if (column < row) {
      process.stdout.write('* ');
      printStars(row, column + 1);
    } else {
      console.log();
      printStars(row - 1, 0);
    }
  }
  
  printStars(5, 0);
  