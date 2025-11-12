/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let rows = obstacleGrid.length;
  let cols = obstacleGrid[0].length;

  let dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  if (obstacleGrid[0][0] === 1) {
    dp[0][0] = 0;
  } else {
    dp[0][0] = 1;
  }
  for (let i = 1; i <= rows - 1; i++) {
    if (obstacleGrid[i][0] === 0 && dp[i - 1][0] === 1) {
      dp[i][0] = 1;
    } else {
      dp[i][0] = 0;
    }
  }
  for (let j = 1; j <= cols - 1; j++) {
    if (obstacleGrid[0][j] === 0 && dp[0][j - 1] === 1) {
      dp[0][j] = 1;
    } else {
      dp[0][j] = 0;
    }
  }

  for (let i = 1; i <= rows - 1; i++) {
    for (let j = 1; j <= cols - 1; j++) {
      if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
      else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[rows - 1][cols - 1];
};
// @lc code=end
