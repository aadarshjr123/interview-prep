/*
 * @lc app=leetcode id=743 lang=javascript
 *
 * [743] Network Delay Time
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = {};
  const dist = {};
  const pq = new MinHeap();
  for (const [u, v, w] of times) {
    if (!graph[u]) graph[u] = [];
    graph[u].push([v, w]);
  }

  for (let i = 1; i <= n; i++) {
    dist[i] = Infinity;
  }

  dist[k] = 0;
  pq.push([0, k]);

  while (!pq.isEmpty()) {
    const [d, node] = pq.pop();
    if (d > dist[node]) continue;
    for (let [neighbor, weight] of graph[node] || []) {
      let newDist = d + weight;
      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        pq.push([newDist, neighbor]);
      }
    }
  }

  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (dist[i] === Infinity) return -1;
    ans = Math.max(ans, dist[i]);
  }

  return ans;
};
// @lc code=end
