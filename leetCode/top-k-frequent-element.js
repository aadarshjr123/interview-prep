/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (!nums || nums.length === 0) return [];
  if (k <= 0) return [];
  let hashMap = {};
  let heap = new MinHeap();

  nums.forEach((item) => {
    if (hashMap[item] === undefined) {
      hashMap[item] = 1;
    } else {
      hashMap[item]++;
    }
  });

  for (let key in hashMap) {
    let value = hashMap[key];
    heap.push([value, key]);

    if (heap.size() > k) {
      heap.pop();
    }
  }

  let output = [];
  while (heap.size()) {
    let [_, key] = heap.pop();
    output.push(Number(key));
  }

  return output;
};
// @lc code=end
