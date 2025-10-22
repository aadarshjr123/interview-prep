function validTree(n, edges) {
  if (edges.length !== n - 1) return false;
  let parent = Array.from({ length: n }, (_, i) => i);

  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }

    return parent[x];
  };

  const union = (a, b) => {
    let rootA = find(a);
    let rootB = find(b);

    if (rootA === rootB) return false;

    parent[rootB] = rootA;
    return true;
  };

  for (let [a, b] of edges) {
    if (!union(a, b)) return false;
  }

  return true;
}
