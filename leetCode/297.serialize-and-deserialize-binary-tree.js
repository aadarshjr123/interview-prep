/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push("null");
    }
  }
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let index = 0;
  if (data.length === 0) return null;
  let root = new TreeNode(data[index]);
  index++;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (data[index] !== "null") {
      node.left = new TreeNode(data[index]);
      queue.push(node.left);
    }
    index++;
    if (data[index] !== "null") {
      node.right = new TreeNode(data[index]);
      queue.push(node.right);
    }
    index++;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

// time: O(n)
// space: O(n)
// bfs
// serialize:
// use a queue to keep track of nodes to be processed
// while the queue is not empty, dequeue a node
// if the node is not null, add its value to the result array and enqueue its left and right children
// if the node is null, add "null" to the result array
// return the result array
// deserialize:
// if the data array is empty, return null
// create the root node with the first element of the data array
// use a queue to keep track of nodes to be processed
// while the queue is not empty, dequeue a node
// if the next element in the data array is not "null", create the left child and enqueue it
// if the next element in the data array is not "null", create the right child and enqueue it
// return the root node after processing all elements in the data array

// example
// [1,2,3,null,null,4,5]
//     1
//   2   3
//      4 5
// [1,2,3,"null","null",4,5]
// [1,2,3,"null","null",4,5]

// what pattern problem ?
// tree bfs
