/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memo = {};
  function dfs(i) {
    if (i === n) return 1;
    if (i > n) return 0;
    if (memo[i] !== undefined) return memo[i];
    let result = dfs(i + 1) + dfs(i + 2);
    memo[i] = result;
    return result;
  }

  return dfs(0);
};
// @lc code=end
