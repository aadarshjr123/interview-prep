/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let row = grid.length;
  let column = grid[0].length;
  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= row || c >= column || grid[r][c] === "0") return;

    grid[r][c] = "0";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  let count = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
};
// @lc code=end

// time: O(m*n) m is the number of rows, n is the number of columns
// space: O(m*n) in the worst case, the grid is filled with lands, the recursion call stack will go m*n deep
// dfs
// iterate through the grid, when we find a land (1), we increment the count and call dfs to mark all connected lands as water (0)
// in dfs, we check the boundary conditions and if the current cell is water (0), we return
// else we mark the current cell as water (0) and call dfs for all 4 directions (up, down, left, right)
// finally, we return the count of islands

//examples
// grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];
// return 3

// what pattern problem ?
// multi-source BFS
