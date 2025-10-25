/*
 * @lc app=leetcode id=329 lang=javascript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(r, c) {
    if (dp[r][c] > 0) return dp[r][c];

    let max_len = 1;
    for (let [dr, dc] of dirs) {
      (nr = r + dr), (nc = c + dc);

      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;

      if (matrix[nr][nc] > matrix[r][c]) {
        let child_len = dfs(nr, nc);
        max_len = Math.max(max_len, 1 + child_len);
      }
    }

    dp[r][c] = max_len;
    return max_len;
  }

  let result = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      result = Math.max(result, dfs(r, c));
    }
  }

  return result;
};
// @lc code=end
