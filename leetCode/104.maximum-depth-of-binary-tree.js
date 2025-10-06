/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth = function (root) {
  if (!root) return 0;

  let leftNode = maxDepth(root.left);
  let rightNode = maxDepth(root.right);

  return Math.max(leftNode, rightNode) + 1;
};

// @lc code=end

// time: O(n)
// space: O(h) h is the height of the tree
// dfs
// base case: if root is null, return 0
// recursively find the max depth of left and right subtree
// return the max of left and right subtree + 1 (for the root)
// if the tree is balanced, space is O(logn)
// if the tree is skewed, space is O(n)

// what pattern problem ?
// tree dfs
