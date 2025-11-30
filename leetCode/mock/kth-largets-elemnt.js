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
    let minHeap = new MinPriorityQueue();

    for (let value of nums) {
        minHeap.enqueue(value)

        if(minHeap.size() > k) {
            minHeap.dequeue()
        }
    }

    return minHeap.front().element;
};
// @lc code=end
