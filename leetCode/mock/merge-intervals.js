/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];

  for (let interval of intervals) {
    let prev = result[result.length - 1];
    if (!result.length || prev[1] < interval[0]) {
      result.push(interval);
      continue;
    }

    if (prev[1] >= interval[0]) {
      prev[1] = Math.max(prev[1], interval[1]);
    }
  }

  return result;
};
// @lc code=end
