const isValid = require('./isValidSudoku.js');
const possibles = require('./possibleValues.js');
function complete(board){
  for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
      if(board[i][j]=='.'){
        return false;
      }
    }
  }
  return true;
}

function sudokuSolver(board){
  var i,j;
  var choices;
  if(complete(board)){
    console.log("completed");
    console.log(board);
    console.log(isValid(board));
    return;
  } else {
    var found = false;
    for(var x=0;x<9;x++){
      for(var y=0;y<9;y++){
        if(board[x][y]=='.'){ // this place is empty
          found = true;
          i=x;
          j=y;
          break; // breaks y loop
        }
      }
      if(found) break; // breaks x loop for empty place found
    }
    choices = possibles(board, i, j);
    for(var k=0;k<choices.length;k++){
      board[i][j] = choices[k];
      sudokuSolver(board);
    }
    board[i][j] = '.'; // not found
    return false;
  }
}

module.exports = sudokuSolver;