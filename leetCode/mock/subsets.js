/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  function dfs(i, subset) {
    if (i === nums.length) {
      result.push([...subset]);
      return;
    }

    dfs(i + 1, subset);
    subset.push(nums[i]);
    dfs(i + 1, subset);
    subset.pop();
  }

  dfs(0, []);
  return result;
};
// @lc code=end
