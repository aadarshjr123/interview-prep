/*
 * @lc app=leetcode id=1631 lang=javascript
 *
 * [1631] Path With Minimum Effort
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const row = heights.length,
    cols = heights[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dist = Array.from({ length: row }, () => Array(cols).fill(Infinity));
  dist[0][0] = 0;

  const q = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });
  q.enqueue([0, 0, 0]);

  while (q.size() > 0) {
    const [eff, r, c] = q.dequeue();
    if (r === row - 1 && c === cols - 1) return eff;

    if (eff > dist[r][c]) continue;

    for (const [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc;
      if (nr < 0 || nr >= row || nc < 0 || nc >= cols) continue;

      const step = Math.abs(heights[nr][nc] - heights[r][c]);
      const nextEff = Math.max(eff, step);

      if (nextEff < dist[nr][nc]) {
        dist[nr][nc] = nextEff;
        q.enqueue([nextEff, nr, nc]);
      }
    }
  }

  return -1;
};
// @lc code=end
