/*
 * @lc app=leetcode id=684 lang=javascript
 *
 * [684] Redundant Connection
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  let adj = Array.from({ length: edges.length + 1 }, (_, i) => i);
  function find(x) {
    if (adj[x] !== x) {
      adj[x] = find(adj[x]);
    }
    return adj[x];
  }

  function union(a, b) {
    let rootA = find(a);
    let rootB = find(b);

    if (rootA === rootB) return false;

    adj[rootB] = rootA;
    return true;
  }

  for (const [a, b] of edges) {
    if (!union(a, b)) return [a, b];
  }
};
// @lc code=end
