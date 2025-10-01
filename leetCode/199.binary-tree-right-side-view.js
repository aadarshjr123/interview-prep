/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (i === levelSize - 1) {
        result.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};
// @lc code=end

// time: O(n)
// space: O(n)
// bfs
// use a queue to keep track of nodes at the current level
// while the queue is not empty, process each level
// for each level, get the size of the queue (number of nodes at this level)
// for each node at this level, dequeue it
// if it's the last node at this level (i === levelSize - 1), add its value to the result array
// enqueue its left and right children if they exist
// return the result array after processing all levels
// in the worst case, the queue can hold all nodes at the last level, which is O(n)
