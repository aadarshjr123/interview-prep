/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let adj = Array.from({ length: numCourses }, () => []);
  let indeg = new Array(numCourses).fill(0);

  for (const [to, from] of prerequisites) {
    adj[from].push(to);
    indeg[to]++;
  }

  let q = [];
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) q.push(i);
  }

  let order = [];
  for (let head = 0; head < q.length; head++) {
    let course = q[head];
    order.push(course);

    for (const next of adj[course]) {
      indeg[next]--;
      if (indeg[next] === 0) q.push(next);
    }
  }

  return order.length === numCourses ? order : [];
};
// @lc code=end
