/**
 * Check if the given 2D array representing a Soduku board is a valid soduku
 *
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidSudoku = function(board) {
  const isValidRow = (inBoard, inRow) => {
    const s = new Set();
    for(const item of inBoard[inRow]) {
      if(s.has(item)) {
        return false;
      }
      if(item !== ".") {
        s.add(item);
      }
    }
    return true;
  }

  const isValidCol = (inBoard, inCol) => {
    const s = new Set();
    for(let i = 0; i < 9; i++) {
      const item = inBoard[i][inCol];
      if(s.has(item)) {
        return false;
      }
      if(item !== ".") {
        s.add(item);
      }
    }
    return true;
  }

  const isValidBox = (inBoard, inRowStart, inColStart) => {
    const s = new Set();
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        const item = inBoard[inRowStart + i][inColStart + j];
        if(s.has(item)) {
          return false;
        }
        if(item !== ".") {
          s.add(item)
        }
      }
    }
    return true;
  }

  let isValid = [];
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      isValid.push(isValidRow(board, i) && isValidCol(board, j) && isValidBox(board, (i - (i % 3)), (j - (j % 3))));
    }
  }

  return isValid.every((x) => x === true);
};

const board = [["5","3",".",".","7",".",".",".","."]
              ,["6",".",".","1","9","5",".",".","."]
              ,[".","9","8",".",".",".",".","6","."]
              ,["8",".",".",".","6",".",".",".","3"]
              ,["4",".",".","8",".","3",".",".","1"]
              ,["7",".",".",".","2",".",".",".","6"]
              ,[".","6",".",".",".",".","2","8","."]
              ,[".",".",".","4","1","9",".",".","5"]
              ,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));
