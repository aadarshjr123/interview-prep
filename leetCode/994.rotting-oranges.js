/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (!grid || grid.length === 0) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const q = [];
  let head = 0;
  let fresh = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        q.push([r, c]);
      } else if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }
  if (fresh === 0) return 0;
  let min = 0;
  while (head < q.length && fresh > 0) {
    let size = q.length - head;
    for (let i = 0; i < size; i++) {
      const [r, c] = q[head++];
      for (const [dr, dc] of dirs) {
        const nr = r + dr,
          nc = c + dc;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2;
          fresh--;
          q.push([nr, nc]);
        }
      }
    }
    min++;
  }
  return fresh === 0 ? min : -1;
};
// @lc code=end

// time: O(m*n) m is the number of rows, n is the number of columns
// space: O(m*n) in the worst case, the queue will contain all the cells in the grid
// bfs
// use a queue to keep track of rotten oranges
// count the number of fresh oranges
// while the queue is not empty and there are fresh oranges left, process each level
// for each level, get the size of the queue (number of rotten oranges at this level)
// for each rotten orange at this level, dequeue it, and rot its adjacent fresh oranges (up, down, left, right)
// decrement the count of fresh oranges and enqueue the newly rotten oranges
// increment the minutes counter after processing all rotten oranges at this level
// finally, if there are no fresh oranges left, return the minutes counter, else return -1

//examples
// grid = [[2,1,1],[1,1,0],[0,1,1]]
// return 4
// grid = [[2,1,1],[0,1,1],[1,0,1]]
// return -1
// grid = [[0,2]]
// return 0
