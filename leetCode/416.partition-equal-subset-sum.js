/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 === 1) return false;

  const targetSum = sum / 2;

  let dp = Array.from({ length: targetSum + 1 }).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let j = targetSum; j >= num; j--) {
      if (dp[j - num]) dp[j] = true;
    }
  }

  return dp[targetSum];
};
// @lc code=end
