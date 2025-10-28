/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (!nums || nums.length === 0) return 0;
  if (k <= 0) return 0;
  let heap = new MinPriorityQueue();

  for (let value of nums) {
    heap.enqueue(value);

    if (heap.size() > k) {
      heap.dequeue();
    }
  }

  return heap.front();
};
// @lc code=end
