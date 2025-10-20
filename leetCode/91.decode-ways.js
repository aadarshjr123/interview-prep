/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let dp = Array.from({ length: s.length + 1 });
  dp[s.length] = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (Number(s[i]) === 0) {
      dp[i] = 0;
    }

    if (Number(s[i]) >= 1 && Number(s[i]) <= 9) {
      dp[i] = dp[i + 1];
    }

    if (Number(s[i] + s[i + 1]) >= 10 && Number(s[i] + s[i + 1]) <= 26) {
      dp[i] += dp[i + 2];
    }
  }

  return dp[0];
};
// @lc code=end
