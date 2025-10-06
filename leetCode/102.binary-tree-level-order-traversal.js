/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }

  return result;
};
// @lc code=end

// [3,9,20,null,null,15,7]
//     3
//   9   20
//      15  7
// [[3],[9,20],[15,7]]

// time: O(n)
// space: O(n)
// bfs
// use a queue to keep track of nodes at the current level
// while the queue is not empty, process each level
// for each level, get the size of the queue (number of nodes at this level)
// create an array to store the values of nodes at this level
// for each node at this level, dequeue it, add its value to the current level array
// enqueue its left and right children if they exist
// after processing all nodes at this level, add the current level array to the result array
// return the result array after processing all levels
// in the worst case, the queue can hold all nodes at the last level, which is O(n/2) = O(n)

// what pattern problem ?
// tree bfs
