/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  const backtrack = (i, path, sum) => {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;

    for (let j = i; j < candidates.length; j++) {
      path.push(candidates[j]);
      backtrack(j, path, sum + candidates[j]);
      path.pop();
    }
  };

  backtrack(0, [], 0);
  return result;
};
// @lc code=end
