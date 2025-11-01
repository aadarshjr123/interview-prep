var findOrder = function (numCourses, prerequisites) {
  let adj = Array.from({ length: numCourses }, (_, i) => []);
  let inDegree = Array(numCourses).fill(0);

  for (let [from, to] of prerequisites) {
    adj[to].push(from);
    inDegree[from]++;
  }

  let q = [];
  for (let i in inDegree) {
    if (inDegree[i] === 0) q.push(i);
  }

  let result = [];
  while (q.length > 0) {
    let node = q.shift();
    result.push(node);
    for (let neighbour of adj[node]) {
      inDegree[neighbour]--;
      if (inDegree[neighbour] === 0) q.push(neighbour);
    }
  }

  return result.length === numCourses ? result : [];
};
