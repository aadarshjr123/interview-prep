/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const case1 = nums.slice(0, nums.length - 1);
  const case2 = nums.slice(1);

  const robber = (houses) => {
    dp = Array.from({ length: houses.length }).fill(0);
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);
    for (let i = 2; i < houses.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
    }

    return dp[houses.length - 1];
  };

  let result = [];
  if (nums.length === 1) {
    result = nums[0];
  } else {
    result = Math.max(robber(case1), robber(case2));
  }
  return result;
};
// @lc code=end
