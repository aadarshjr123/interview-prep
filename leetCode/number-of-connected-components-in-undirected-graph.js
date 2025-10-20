function numberOfConnectedComponents(n, edges) {
  const adj = Array.from({ length: n }, (_, i) => i);
  function find(x) {
    if (adj[x] !== x) {
      adj[x] = find(adj[x]);
    }
    return adj[x];
  }
  function union(a, b) {
    let rootA = find(a);
    let rootB = find(b);

    if (rootA === rootB) return false;
    adj[rootB] = rootA;
    return true;
  }

  let count = n;
  for (let [a, b] of edges) {
    if (union(a, b)) count--;
  }

  return count;
}
