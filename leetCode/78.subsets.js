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
  let subset = [];
  let result = [];
  const backtrack = (i) => {
    if (i === nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    backtrack(i + 1);
    subset.pop();
    backtrack(i + 1);
  };

  backtrack(0);
  return result;
};
// @lc code=end
