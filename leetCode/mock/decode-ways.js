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
  if (s.length === 0 || s[0] === "0") return 0;
  let dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= s.length; i++) {
    if (Number(s[i - 1]) >= 1 && Number(s[i - 1] <= 9)) {
      dp[i] = dp[i - 1];
    }
    if (
      Number(s[i - 2] + s[i - 1]) >= 10 &&
      Number(s[i - 2] + s[i - 1] <= 26)
    ) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
};
// @lc code=end
