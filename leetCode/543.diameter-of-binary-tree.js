/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  function depth(node) {
    if (!node) return 0;

    let leftNode = depth(node.left);
    let rightNode = depth(node.right);
    maxDiameter = Math.max(maxDiameter, leftNode + rightNode);
    return Math.max(leftNode, rightNode) + 1;
  }

  depth(root);
  return maxDiameter;
};
// @lc code=end

// time: O(n)
// space: O(h) h is the height of the tree
// dfs
// base case: if node is null, return 0
// recursively find the depth of left and right subtree
// update maxDiameter with the sum of left and right subtree depth
// return the max of left and right subtree depth + 1 (for the current node)
// if the tree is balanced, space is O(logn)
// if the tree is skewed, space is O(n)

//examples
// [1,2,3,4,5]
//         1
//       2   3
//     4  5
// return 4

// what pattern problem ?
// tree dfs
// similar problems: 104, 101, 226
