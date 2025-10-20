/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const validate = (node, low = -Infinity, high = Infinity) => {
    if (!node) return true;
    if (node.val <= low || node.val >= high) return false;
    return (
      validate(node.left, low, node.val) && validate(node.right, node.val, high)
    );
  };
  return validate(root);
};
// @lc code=end
