/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && targetSum === root.val) return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
// @lc code=end

// time: O(n)
// space: O(h) h is the height of the tree
// dfs
// base case: if root is null, return false
// if it's a leaf node, check if the targetSum equals to the node's value
// recursively check the left and right subtree with the updated targetSum (targetSum - node.val)
// if the tree is balanced, space is O(logn)
// if the tree is skewed, space is O(n)

// what pattern problem ?
// tree dfs
