/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  let low = 0,
    mid = 0;
  high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}
// @lc code=end

// time: O(n)
// space: O(1)
// three pointers
// low pointer to track the position to place the next 0
// mid pointer to traverse the array
// high pointer to track the position to place the next 2
// iterate through the array with mid pointer
// if nums[mid] === 0, swap nums[low] and nums[mid], increment low and mid
// if nums[mid] === 1, just increment mid
// if nums[mid] === 2, swap nums[mid] and nums[high], decrement high

// examples
// [2,0,2,1,1,0] => [0,0,1,1,2,2]
// [2,0,1] => [0,1,2]
// [0] => [0]

// what pattern problem ?
// three pointers
