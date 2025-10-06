/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxSum = -Infinity;
  function findMaxPath(node) {
    if (!node) return 0;
    let leftMax = Math.max(0, findMaxPath(node.left));
    let rightMax = Math.max(0, findMaxPath(node.right));
    maxSum = Math.max(maxSum, node.val + leftMax + rightMax);
    return node.val + Math.max(leftMax, rightMax);
  }
  findMaxPath(root);
  return maxSum;
};
// @lc code=end

// time: O(n)
// space: O(h) h is the height of the tree
// dfs
// base case: if node is null, return 0
// recursively find the max path sum of left and right subtree
// if the max path sum of left or right subtree is negative, we ignore it by taking max with 0
// update maxSum with the sum of node's value and left and right max path sum
// return the node's value + max of left and right max path sum (to continue the path)
// if the tree is balanced, space is O(logn)
// if the tree is skewed, space is O(n)

//exmaples
// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a sum of 2 + 1 + 3 = 6.
// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a sum of 15 + 20 + 7 = 42.
// Input: root = [2,-1]
// Output: 2
// Explanation: The optimal path is just the root node with a sum of 2.

// what pattern problem ?
// tree dfs
