/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function (root) {
  const checkBalance = (node) => {
    if (!node) return 0;
    const leftHeight = checkBalance(node.left);
    if (leftHeight === -1) return -1;
    const rightHeight = checkBalance(node.right);
    if (rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
  };
  return checkBalance(root) !== -1;
};
// @lc code=end

// time: O(n)
// space: O(h) h is the height of the tree
// dfs
// use a helper function checkBalance to check if the tree is balanced and return the height of the tree
// base case: if node is null, return 0
// recursively find the height of left and right subtree
// if leftHeight or rightHeight is -1, it means the subtree is not balanced, so return -1
// if the difference between leftHeight and rightHeight is greater than 1, return -1
// otherwise, return the max of leftHeight and rightHeight + 1 (for the current node)
// if the tree is balanced, space is O(logn)
// if the tree is skewed, space is O(n)

//examples
// [3,9,20,null,null,15,7]
//     3
//   9   20
//      15  7
// return true
// [1,2,2,3,3,null,null,4,4]
//         1
//      2     2
//    3  3
//  4 4
// return false
// []
// return true
// [1,2,2,3,null,null,3,4,null,null,4]
//         1
//      2     2
//    3       3
//  4         4
// return false
