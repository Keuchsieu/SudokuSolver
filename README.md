# SudokuSolver
Solves a Sudoku game

Developed in NodeJS

Some heads-up here:

1. A valid sudoku board might be unsolvable. The result solution will be [] (an empty array)

2. An empty spot is marked as ".", because I tested this on LeetCode, 
and that's how they mark empty places in the test cases.


## USAGE
An example can be found in test.js

Prepare a sudoku board, in this case an empty board
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
 
Creating an object of Solver class

```
var x = new Solver(board);
```

Solve it!
```
x.solve();
```

Get your result, note that solution is not a getter, but a property of object x.
```
x.solution;
```
## Related API POST request body: (temporary)

```
{
  "board": [[".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."]]
}
```
