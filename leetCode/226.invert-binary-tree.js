/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
// @lc code=end

//[4,2,7,1,3,6,9]
//     4
//   2    7
// 1  3  6  9
//     4
//   7    2
// 9  6  3  1

// time: O(n)
// space: O(h) h is the height of the tree
// dfs
// base case: if root is null, return null
// swap left and right child
// recursively invert left and right subtree
// return root
// if the tree is balanced, space is O(logn)
// if the tree is skewed, space is O(n)

// what pattern problem ?
// tree dfs
