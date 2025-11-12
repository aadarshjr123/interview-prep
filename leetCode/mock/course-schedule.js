/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  const states = Array(numCourses).fill(0);

  for (let [course, prereq] of prerequisites) {
    adj[prereq].push(course);
  }

  function dfs(i) {
    if (states[i] === 1) return false;
    if (states[i] === 2) return true;

    states[i] = 1;

    for (let neighbour of adj[i]) {
      if (!dfs(neighbour)) return false;
    }

    states[i] = 2;

    return true;
  }

  for (let i = 0; i <= numCourses - 1; i++) {
    if (states[i] === 0) {
      if (!dfs(i)) return false;
    }
  }

  return true;
}
// @lc code=end
