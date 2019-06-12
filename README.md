# SudokuSolver
Solves a Sudoku game

Developed in NodeJS

# USAGE
An example can be found in test.js

prepare a sudoku board, in this case an empty board
```
var board =[[".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."]];
```
 
creating an object of Solver class

```
var x = new Solver(board);
```

solve it!
```
x.solve();
```

get your result, note that solution is not a getter, but a property of object x.
```
x.solution;
```
