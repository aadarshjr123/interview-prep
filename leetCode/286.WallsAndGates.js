/*
 * @lc app=leetcode id=286 lang=javascript
 *
 * [286] Walls and Gates
 */
// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  // rooms is a 2D array
  if (!rooms || rooms.length === 0) return 0;

  const INF = 2147483647;
  let rows = rooms.length;
  let cols = rooms[0].length;
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let q = [];
  let head = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rooms[r][c] === 0) {
        q.push([r, c]);
      }
    }
  }

  while (head < q.length) {
    const [r, c] = q[head++];
    for (let [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        rooms[nr][nc] === INF
      ) {
        rooms[nr][nc] = rooms[r][c] + 1;
        q.push([nr, nc]);
      }
    }
  }

  return rooms;
};
// @lc code=end

// time: O(m*n) m is the number of rows, n is the number of columns
// space: O(m*n) in the worst case, the queue will contain all the rooms
// bfs
// use a queue to keep track of gates (0s)
// enqueue all gates (0s) in the grid
// while the queue is not empty, dequeue a gate and check its 4 directions (up, down, left, right)
// if the adjacent room is an empty room (INF), update its distance to the gate (current gate distance + 1) and enqueue it
// continue this process until all reachable empty rooms are updated with the distance to the nearest gate
// finally, return the modified rooms grid

//examples
// rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
// return [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
