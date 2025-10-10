/*
 * @lc app=leetcode id=1091 lang=javascript
 *
 * [1091] Shortest Path in Binary Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  const q = [[0, 0, 1]];
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  visited[0][0] = true;

  while (q.length > 0) {
    const [r, c, dist] = q.shift();

    if (r === n - 1 && c === n - 1) return dist;

    for (const [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc;
      if (
        nr >= 0 &&
        nr < n &&
        nc >= 0 &&
        nc < n &&
        grid[nr][nc] === 0 &&
        !visited[nr][nc]
      ) {
        visited[nr][nc] = true;
        q.push([nr, nc, dist + 1]);
      }
    }
  }

  return -1;
};
// @lc code=end

// example

// [
//  [0,1,0],
//  [0,0,0],
//  [1,0,0]
// ]
