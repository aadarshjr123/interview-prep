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
  let row = grid.length;
  let col = grid[0].length;

  let dp = Array.from({ length: row }, () => Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (i === 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1];
      } else if (j === 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1];
      } else {
        dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[row - 1][col - 1];
};
// @lc code=end
