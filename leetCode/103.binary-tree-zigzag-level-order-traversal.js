/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  let level = 0;
  while (queue.length) {
    let levelSize = queue.length;
    let queueSize = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      queueSize.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (level % 2 === 1) {
      queueSize.reverse();
    }
    result.push(queueSize);
    level++;
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
// create an array to store the values of nodes at this level
// for each node at this level, dequeue it, add its value to the current level array
// enqueue its left and right children if they exist
// if the level is odd, reverse the current level array before adding it to the result array
// return the result array after processing all levels
// in the worst case, the queue can hold all nodes at the last level, which is O(n)

// examples
// [3,9,20,null,null,15,7]
//     3
//   9   20
//      15  7
// [[3],[20,9],[15,7]]
// [1,2,3,4,null,null,5]
//      1
//    2   3
//   4     5
// [[1],[3,2],[4,5]]
// []
// []
// [1]
// [[1]]

// what pattern problem ?
// tree bfs
