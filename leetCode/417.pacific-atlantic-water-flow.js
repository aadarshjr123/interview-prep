/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;
    if (visited[r][c]) return;
    if (heights[r][c] < prevHeight) return;
    visited[r][c] = true;
    for (let [dr, dc] of directions) {
      dfs(r + dr, c + dc, visited, heights[r][c]);
    }
  }
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacific, heights[0][c]);
    dfs(rows - 1, c, atlantic, heights[rows - 1][c]);
  }
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific, heights[r][0]);
    dfs(r, cols - 1, atlantic, heights[r][cols - 1]);
  }
  const result = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific[r][c] && atlantic[r][c]) result.push([r, c]);
    }
  }

  return result;
};
// @lc code=end

// time: O(m * n)
// space: O(m * n)

// pattern: Graph Traversal (DFS/BFS) on a 2D grid
// also called "Multi-source Reverse Flow" pattern
// (start from edges and spread inward)

// steps:
// 1. Create two visited matrices: pacific and atlantic (both m x n)
// 2. Define DFS that marks reachable cells if current height >= previous height
// 3. Start DFS from:
//    - Pacific edges (top row + left column)
//    - Atlantic edges (bottom row + right column)
// 4. For each DFS call, flow "inland" to higher or equal height cells
//    because we are reversing the real water flow
// 5. After traversal:
//    - pacific[r][c] = true if cell can reach Pacific
//    - atlantic[r][c] = true if cell can reach Atlantic
// 6. Collect cells where both pacific[r][c] && atlantic[r][c] are true
// 7. Return those coordinates

// intuition:
// Instead of flowing water from each cell outward (which is costly),
// we reverse the process — we let the oceans "flow inward".
// Any cell both oceans can reach => water can flow to both oceans.

// example:
// Input heights = [
//   [1,2,2,3,5],
//   [3,2,3,4,4],
//   [2,4,5,3,1],
//   [6,7,1,4,5],
//   [5,1,1,2,4]
// ]
// Output = [
//   [0,4],[1,3],[1,4],
//   [2,2],[3,0],[3,1],[4,0]
// ]

// what pattern problem?
// ➤ Matrix DFS (Flood Fill) + Reverse Flow + Multi-source traversal
