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
  let adj = Array.from({ length: n + 1 }, () => []);
  let distance = Array(n + 1).fill(Infinity);
  let heap = new MinHeap();

  for (let [u, v, w] of times) {
    adj[u].push([v, w]);
  }

  distance[k] = 0;
  heap.push([0, k]);

  while (heap.size()) {
    let [time, node] = heap.pop();
    for (let [neighbour, weight] of adj[node]) {
      let newTime = time + weight;
      if (newTime < distance[neighbour]) {
        distance[neighbour] = newTime;
        heap.push([distance[neighbour], neighbour]);
      }
    }
  }

  let maxTime = Math.max(...distance.slice(1));
  return maxTime === Infinity ? -1 : maxTime;
};
// @lc code=end
