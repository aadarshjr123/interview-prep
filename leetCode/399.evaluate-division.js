/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  let parent = {};
  let weight = {};
  function find(x) {
    if (!(x in parent)) return null;
    if (parent[x] !== x) {
      let origParent = parent[x];
      let root = find(origParent);
      parent[x] = root;
      weight[x] *= weight[origParent];
    }
    return parent[x];
  }

  function union(a, b, val) {
    if (!(a in parent)) {
      parent[a] = a;
      weight[a] = 1.0;
    }
    if (!(b in parent)) {
      parent[b] = b;
      weight[b] = 1.0;
    }
    let rootA = find(a);
    let rootB = find(b);

    if (rootA === rootB) return;
    parent[rootB] = rootA;
    weight[rootB] = weight[a] / (val * weight[b]);
  }

  for (let i = 0; i < equations.length; i++) {
    let [a, b] = equations[i];
    let val = values[i];
    union(a, b, val);
  }

  let res = [];
  for (let [a, b] of queries) {
    if (!(a in parent) || !(b in parent)) {
      res.push(-1.0);
    } else {
      let rootA = find(a);
      let rootB = find(b);

      if (rootA !== rootB) {
        res.push(-1.0);
      } else {
        res.push(weight[a] / weight[b]);
      }
    }
  }

  return res;
};
// @lc code=end
