/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) return 0;
  let jumps = 0;
  let end = 0;
  let maxReach = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);
    if (i === end) {
      jumps += 1;
      end = maxReach;
    }
    if (end >= nums.length - 1) return jumps;
  }
};
// @lc code=end
