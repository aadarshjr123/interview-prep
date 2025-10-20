/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Number of Provinces
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const adj = Array.from({ length: n }, (_, i) => i);

  function find(x) {
    if (adj[x] !== x) {
      adj[x] = find(adj[x]);
    }
    return adj[x];
  }

  function union(a, b) {
    let rootA = find(a);
    let rootB = find(b);

    if (rootA !== rootB) adj[rootB] = rootA;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        union(i, j);
      }
    }
  }

  let root = new Set();
  for (let i = 0; i < n; i++) {
    root.add(find(i));
  }

  return root.size;
};
// @lc code=end
