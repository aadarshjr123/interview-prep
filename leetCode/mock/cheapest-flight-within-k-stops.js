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

class MinHeap {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
    this.data.sort((a, b) => a[1] - b[1]);
  }

  pop() {
    return this.data.shift();
  }

  size() {
    return this.data.length;
  }
}
var findCheapestPrice = function (n, flights, src, dst, k) {
  let adj = Array.from({ length: n }, () => []);
  let queue = new MinHeap();
  for (let [from, to, cost] of flights) {
    adj[from].push([to, cost]);
  }

  queue.push([src, 0, 0]);

  while (queue.size()) {
    let [city, cost, stops] = queue.pop();
    if (city === dst) return cost;
    if (stops > k) continue;

    for (let [neigh, weight] of adj[city]) {
      let newCost = cost + weight;
      queue.push([neigh, newCost, stops + 1]);
    }
  }

  return -1;
};
// @lc code=end

// Finished
// Your Input
// 4
// [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]
// 0
// 3
// 1
// Output (0 ms)
// 700
// Expected Answer
// 700
