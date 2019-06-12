const isValid = require('./isValidSudoku.js');
const possibles = require('./possibleValues.js');

class Solver{
  constructor(board){
    this.board = board;
    this.solution = [];
  };
  complete(board){
    for(var i=0;i<9;i++){
      for(var j=0;j<9;j++){
        if(board[i][j]=='.'){
          return false;
        }
      }
    }
    return true;
  };
  sudokuSolver(board){
    var i,j;
    var choices;
    if(this.complete(board)){
      this.solution = board;
      return true;
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
        if(this.sudokuSolver(board)){
          return true;
        }
      }
      board[i][j] = '.'; // not found
      return false;
    }
  }
  solve(){
    if(isValid(this.board)){
      this.sudokuSolver(this.board);
      if(this.solution != []){
        return this.solution;
      }
    } else {
      return false;
    }
  }
}

module.exports = Solver;