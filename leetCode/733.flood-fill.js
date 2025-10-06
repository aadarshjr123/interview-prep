/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  let orignalColour = image[sr][sc];
  if (orignalColour === color) return image;
  let row = image.length;
  let column = image[0].length;
  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= row || c >= column) return;
    if (image[r][c] !== orignalColour) return;
    image[r][c] = color;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };
  dfs(sr, sc);
  return image;
};
// @lc code=end

// time: O(m*n) m is the number of rows, n is the number of columns
// space: O(m*n) in the worst case, the image is filled with the original color, the recursion call stack will go m*n deep
// dfs
// base case: if the current cell is out of bounds or the color is not the original color, return
// change the color of the current cell to the new color
// call dfs for all 4 directions (up, down, left, right)
// finally, return the modified image

//examples
// image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// return [[2,2,2],[2,2,0],[2,0,1]]
// image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 1
// return [[1,1,1],[1,1,1]]
// if the original color is the same as the new color, return the image as is
// image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// return [[0,0,0],[0,0,0]]

// what pattern problem ?
// multi-source BFS
