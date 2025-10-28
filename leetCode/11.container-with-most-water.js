/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maximunArea = 0;
  while (left < right) {
    let shortestWall = Math.min(height[left], height[right]);
    let width = right - left;
    let area = shortestWall * width;
    maximunArea = Math.max(maximunArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maximunArea;
};
// @lc code=end
