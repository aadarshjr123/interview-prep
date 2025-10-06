/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

// @lc code=end

// time: O(logn)
// space: O(1)
// binary search
// [1,2,3,1] => 2
// [1,2,1,3,5,6,4] => 5
// if mid < mid+1 => left = mid + 1
// else right = mid - 1
// return left

//slope-check logic
// if mid < mid+1 => right slope => move to right
// else left slope => move to left
// when left meets right, it's the peak element

// what pattern problem ?
// binary search
