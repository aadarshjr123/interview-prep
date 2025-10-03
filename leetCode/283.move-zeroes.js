/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function moveZeroes(nums) {
  let write = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[write];
      nums[write] = temp;
      write++;
    }
  }
  return nums;
}
// @lc code=end

// time: O(n)
// space: O(1)
// two pointers
// write pointer to track the position to write the next non-zero element
// iterate through the array, when we find a non-zero element, we swap it with the element at the write pointer and increment the write pointer
// this way, all non-zero elements are moved to the front and all zeros are moved to the end
// [0,1,0,3,12] => [1,3,12,0,0]
// [0] => [0]
