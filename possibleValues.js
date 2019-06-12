// check possible values for the square of given row and column
function possibleValues(board, row, col){
  var i,j;
  var possible = ['1','2','3','4','5','6','7','8','9'];
  var blocks = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]];
  var whichb = -1;
  // block
  for(i=0;i<9;i++){
    if(row>=blocks[i][0]&&row<(blocks[i][0]+3) && col>=blocks[i][1] && col<(blocks[i][1]+3)){
      whichb = i; // finds which block does this one falls in.
    }
  }
  if(whichb == -1) return false; // not fall in the right range
  for(i=0;i<3;i++){
    for(j=0;j<3;j++){
      for(var k=0;k<possible.length;k++){
        // blocks[which] finds the top left square, 0 element for row, 1 element for col
        // row + i, col + j for the entire 9 numbers in this block
        if(possible[k]==board[blocks[whichb][0]+i][blocks[whichb][1]+j]){
          possible.splice(k,1);
          k--;
        }
      }
    }
  }
  // column
  for(i=0;i<9;i++){
    for(j=0;j<possible.length;j++){
      if(possible[j] == board[i][col]){ // check each column
        possible.splice(j,1); // remove this element if it is on same column
        j--;
      }
    }
  }
  // row
  for(i=0;i<9;i++){
    for(j=0;j<possible.length;j++){
      if(possible[j]==board[row][i]){ // check each row
        possible.splice(j,1);
        j--;
      }
    }
  }
  
  return possible;
};

module.exports = possibleValues;