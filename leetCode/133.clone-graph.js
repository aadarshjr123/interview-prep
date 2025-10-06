/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;
  const cloneMap = new Map();
  function dfs(curr) {
    if (cloneMap.has(curr)) return cloneMap.get(curr);
    const clone = new _Node(curr.val);
    cloneMap.set(curr, clone);
    for (const neighbor of curr.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  }
  return dfs(node);
};

// @lc code=end

// time: O(n + e) n is the number of nodes, e is the number of edges
// space: O(n) n is the number of nodes
// dfs
// use a map to store the cloned nodes
// base case: if node is null, return null
// if the node is already cloned, return the cloned node from the map
// create a new node with the same value as the original node
// add the new node to the map
// iterate through the neighbors of the original node, recursively clone each neighbor and add it to the neighbors of the cloned node
// return the cloned node
// in the worst case, the recursion stack can go as deep as the number of nodes, which is O(n)
// if the graph is dense, e can be close to n^2, so time complexity can be O(n^2) in that case
// if the graph is sparse, e can be close to n, so time complexity can be O(n) in that case

//example
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1 -- 2
// |    |
// 4 -- 3
// Node 1's value is 1, and it has two neighbors: node 2 and 4.
// Node 2's value is 2, and it has two neighbors: node 1 and 3.
// Node 3's value is 3, and it has two neighbors: node 2 and 4.
// Node 4's value is 4, and it has two neighbors: node 1 and 3.
// The graph looks like this:
//     1
//   /   \
//  2 --- 4
//   \   /
//     3
// We return the copy of the given node (node 1).

// what pattern problem ?
// graph dfs
