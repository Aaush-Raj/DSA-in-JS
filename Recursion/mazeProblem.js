// https://www.youtube.com/watch?v=zg5v2rlV1tM&list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&index=11&ab_channel=KunalKushwaha
// watch above video for understanding




//basic maze problem , here we have to go till the last box of matrics; i.e 1,1 and 
// we either move right , or we move downwards.

//ROW - Vertical
//COL- hoeizontal

const mazeProblem = (path, row, col) => {
    if (row == 1 && col == 1) {
      console.log(path);
      return;
    }

    //GOING DOWNWARDS SO REDUCING 1 FROM COLUMN
    if (col > 1) {
      mazeProblem(path + "D", row, col - 1);
    }

    //GOING RIGHT SO REDUCING 1 FROM ROW

    if (row > 1) {
      mazeProblem(path + "R", row - 1, col);
    }
  };
  
  console.log(mazeProblem("", 3, 3));
  


// same problem, We can just move Diagonaly in this solution.. like a bishop of chess
const mazeProblem_DiagonalPath = (path, row, col) => {
    if (row == 1 && col == 1) {
      console.log(path);
      return;
    }

    //GOING DOWNWARDS SO REDUCING 1 FROM COLUMN
    if (col > 1) {
        mazeProblem_DiagonalPath(path + "D", row, col - 1);
    }
    //GOING RIGHT SO REDUCING 1 FROM ROW

    if (row > 1) {
        mazeProblem_DiagonalPath(path + "R", row - 1, col);
    }

    // GOING DIAGONALLY , SO WE NEED TO REDUCE BOTH COLUMN AND ROW BECAUSE WHEN WE MOVE DIAGONALLY WE REDUCE FROM BOTH SIDES!
    if (row > 1 && col > 1) {
        mazeProblem_DiagonalPath(path + "Z", row - 1, col-1);
    }
  };
  
  console.log(mazeProblem("", 3, 3));



  // FIND ALL THE PATHS TO THE LAST BLOCK , HERE WE HAVE TO FIND "ALL" POSSIBLE PATHS, SO WE WILL USE BACKTRACKING:::

  const mazeProblem_findAllPaths = (path, row, col) => {
    // Base case - reached the end
    if (row == maze.length - 1 && col == maze.length - 1) {
      console.log(path);
      return;
    }
  
    // If the current cell is not traversable, return
    if (maze[row][col] == false) return;
  
    // Mark the current cell as visited
    maze[row][col] = false;
  
    //down = if col<length of array then plus 1
    if (col < maze.length - 1) {
      mazeProblem_findAllPaths(path + "D", row, col + 1);
    }
    //right = if
    if (row < maze.length - 1) {
      mazeProblem_findAllPaths(path + "R", row + 1, col);
    }
  
    //left -  row -=1
    if (row > 0) {
      mazeProblem_findAllPaths(path + "L", row - 1, col);
    }
  
    //up  = col + 1
    if (col > 0) {
      mazeProblem_findAllPaths(path + "U", row, col- 1);
    }
  
    // THis is BackTracking, Reverting the changes so that new possible outcomes can occur
    maze[row][col] = true;

  };
  
  const maze = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ];
  mazeProblem_findAllPaths("", 0, 0)
  
  