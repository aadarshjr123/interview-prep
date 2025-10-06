/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return left;
};
// @lc code=end

// time: O(logn)
// space: O(1)
// binary search
// left starts from 0, right starts from nums.length - 1
// while left <= right
// find mid
// if target === nums[mid], return mid
// else if target < nums[mid], right = mid - 1
// else left = mid + 1
// if not found, return left (the position to insert the target)

// examples
// [1,3,5,6], 5 => 2
// [1,3,5,6], 2 => 1
// [1,3,5,6], 7 => 4
// [1,3,5,6], 0 => 0

// what pattern problem ?
// binary search
