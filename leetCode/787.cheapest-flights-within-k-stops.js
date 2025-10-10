/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of flights) adj[u].push([v, w]);
  const dist = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
  dist[src][0] = 0;
  const pq = new MinHeap();
  pq.push([0, src, 0]);
  while (!pq.isEmpty()) {
    const [cost, node, stops] = pq.pop();
    if (node === dst) return cost;
    if (stops === k + 1) continue;
    for (const [nei, w] of adj[node]) {
      const nextCost = cost + w;
      const nextStops = stops + 1;
      if (nextCost < dist[nei][nextStops]) {
        dist[nei][nextStops] = nextCost;
        pq.push([nextCost, nei, nextStops]);
      }
    }
  }
  return -1;
};
// @lc code=end
