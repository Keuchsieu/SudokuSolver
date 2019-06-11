var isValidSudoku = function(board) {
  var i;
  var j;
  var con;
  var tmp;
  var rst = true;
  // check each row
  for(i=0;i<9;i++){
      con = [];
      for(j=0;j<9;j++){
          tmp = board[i][j];
          if(tmp != '.'){
              con.forEach(ele => {
                  if(ele==tmp) rst = false;
              });
              con.push(tmp);
          }
      }
  }
  if(!rst){
      return false;
  }
  // check cols
  for(i=0;i<9;i++){
      con = [];
      for(j=0;j<9;j++){
          tmp = board[j][i];
          if(tmp != '.'){
              con.forEach(ele => {
                  if(ele==tmp) rst = false;
              });
              con.push(tmp);
          }
      }
  }
  if(!rst){
      return false;
  }
  // check blocks
  var blocks = [
      [0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]
  ];
  blocks.forEach(b=>{
      con = [];
      for(i=0;i<3;i++){
          for(j=0;j<3;j++){
              tmp = board[b[0]+i][b[1]+j];
              if(tmp != '.'){
                  con.forEach(ele => {
                      if(ele==tmp) rst = false;
                  });
                  con.push(tmp);
              };
          }
      }
  });
  return rst;
};

export default isValidSudoku;