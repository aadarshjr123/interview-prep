/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (i === 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = grid[i][j] + dp[i - 1][j];
      } else {
        dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[rows - 1][cols - 1];
};
// @lc code=end
