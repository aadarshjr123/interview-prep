/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let tails = [];
  for (let num of nums) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }

    if (left === tails.length) tails.push(num);
    else tails[left] = num;
  }

  return tails.length;
};
// @lc code=end
