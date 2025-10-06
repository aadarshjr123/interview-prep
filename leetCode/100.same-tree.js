/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// @lc code=end

// [1,2,3]
// [1,2,3]
//     1
//   2   3
//     1
//   2   3

// time: O(n)
// space: O(h) h is the height of the tree
// dfs
// base case: if both nodes are null, return true
// if one of the nodes is null, return false
// if the values of the two nodes are not equal, return false
// recursively check if the left subtree of p is the same as the left subtree of q
// and if the right subtree of p is the same as the right subtree of q
// if the tree is balanced, space is O(logn)
// if the tree is skewed, space is O(n)

//example
// [1,2]
// [1,null,2]
//     1         1
//   2     vs    null
//             2
// return false
// [1,2,1]
// [1,1,2]
//     1         1
//   2   vs    1   2
// return false
// [1,2,3]
// [1,2,3]
//     1
//   2   3   vs  2   3
// return true

// what pattern problem ?
// tree dfs
