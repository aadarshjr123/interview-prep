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
  let col = grid[0].length;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] === "0") return;

    grid[r][c] = "0";

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
  let count = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] === "1") {
        dfs(r, c);
        count += 1;
      }
    }
  }
};
// @lc code=end
