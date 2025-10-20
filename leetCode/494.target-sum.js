/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let memo = {};
  const recurse = (i, sum) => {
    let key = i + "," + sum;

    if (i === nums.length) {
      return sum === target ? 1 : 0;
    }

    if (key in memo) {
      return memo[key];
    }

    let add = recurse(i + 1, sum + nums[i]);
    let minus = recurse(i + 1, sum - nums[i]);

    memo[key] = add + minus;

    return memo[key];
  };

  return recurse(0, 0);
};
// @lc code=end
