/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let node = root;
  while (node) {
    if (p.val < node.val && q.val < node.val) {
      node = node.left;
    } else if (p.val > node.val && q.val > node.val) {
      node = node.right;
    } else {
      return node;
    }
  }
  return null;
};

// @lc code=end

// time: O(h) h is the height of the tree
// space: O(1)
// iterative
// start from the root, if both p and q are smaller than the current node, go left
// if both p and q are larger than the current node, go right
// otherwise, we have found the split point, return the current node
// if the tree is balanced, time is O(logn)
// if the tree is skewed, time is O(n)

//example:
//     6
//   2    8
// 0  4  7  9
//   3 5
// p = 2, q = 8 -> return 6
// p = 2, q = 4 -> return 2
// p = 3, q = 5 -> return 4

// what pattern problem ?
// binary search tree
