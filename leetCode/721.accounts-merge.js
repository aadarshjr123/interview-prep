/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const parent = {};
  const emailToName = {};
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(a, b) {
    let rootA = find(a);
    let rootB = find(b);

    if (rootA !== rootB) parent[rootB] = rootA;
  }

  for (const account of accounts) {
    const name = account[0];
    const firstEmail = account[1];

    for (let i = 1; i < account.length; i++) {
      const email = account[i];
      if (!parent[email]) parent[email] = email;
      if (!parent[firstEmail]) parent[firstEmail] = firstEmail;
      union(firstEmail, email);
      emailToName[email] = name;
    }
  }

  let group = {};
  for (let email in parent) {
    const root = find(email);
    if (!group[root]) group[root] = [];
    group[root].push(email);
  }

  const result = [];
  for (let root in group) {
    const emails = group[root].sort();
    const name = emailToName[root];
    result.push([name, ...emails]);
  }

  return result;
};
// @lc code=end
