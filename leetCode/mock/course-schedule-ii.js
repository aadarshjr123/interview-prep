var findOrder = function (numCourses, prerequisites) {
  let adj = Array.from({ length: numCourses }, () => []);
  let inDegree = Array(numCourses).fill(0);

  for (let [course, prereq] of prerequisites) {
    adj[prereq].push(course);
    inDegree[course]++;
  }

  let q = [];
  for (let i in inDegree) {
    if (inDegree[i] === 0) q.push(i);
  }

  let order = [];
  while (q.length > 0) {
    let course = q.shift();
    order.push(course);

    for (let next of adj[course]) {
      inDegree[next]--;
      if (inDegree[next] === 0) q.push(next);
    }
  }

  return order.length === numCourses ? order : [];
};
