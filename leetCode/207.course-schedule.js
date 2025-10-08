var canFinish = function (numCourses, prerequisites) {
  let adj = Array.from({ length: numCourses }, () => []);
  let indeg = new Array.from(numCourses).fill(0);

  for (const [to, from] of prerequisites) {
    adj[from].push(to);
    indeg[to]++;
  }

  const q = [];
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) q.push(i);
  }

  let taken = 0;
  for (let head = 0; head < q.length; head++) {
    let course = q[head];
    taken++;

    for (const next of course < adj.length ? adj[course] : []) {
      indeg[next]--;
      if (indeg[next] === 0) q.push(next);
    }
  }

  return (taken = numCourses);
};
