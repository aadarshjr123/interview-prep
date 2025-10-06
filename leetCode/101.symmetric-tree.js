/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
  if (!root) return true;
  const isMirror = (t1, t2) => {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    return (
      t1.val === t2.val &&
      isMirror(t1.right, t2.left) &&
      isMirror(t1.left, t2.right)
    );
  };

  return isMirror(root.left, root.right);
};
// @lc code=end

// time: O(n)
// space: O(h) h is the height of the tree
// dfs
// base case: if both nodes are null, return true
// if one of the nodes is null, return false
// check if the values of the two nodes are equal
// recursively check if the right subtree of t1 is a mirror of the left subtree of t2
// and if the left subtree of t1 is a mirror of the right subtree of t2
// if the tree is balanced, space is O(logn)
// if the tree is skewed, space is O(n)

// what pattern problem ?
// tree dfs
