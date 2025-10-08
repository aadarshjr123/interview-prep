function validTree(n, edges) {
  if (edges.length !== n - 1) return false;
  const parent = Array.from({ length: n }, (_, i) => i);

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }
  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA === rootB) return false;

    parent[rootB] = rootA;
    return true;
  }
  for (let [a, b] of edges) {
    if (!union(a, b)) {
      return false;
    }
  }

  return true;
}

// time: O(E * α(N)) ~ O(E)   (E = number of edges)
// space: O(N)   (for the parent array)
//
// idea:
// use Union-Find to check if the graph is connected and has no cycles
// - if edges.length !== n - 1 → not a tree
// - for each edge, find roots of both nodes
// - if they have the same root → cycle → not a tree
// - otherwise, connect (union) them
// - if all edges processed without a cycle → it's a tree
//
// base cases:
// - n = 1 and edges = [] → true
// - self-loop or duplicate edge → false
//
// examples:
// n = 5, edges = [[0,1],[0,2],[0,3],[1,4]] → true
// n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]] → false
//
// pattern:
// Union-Find (Disjoint Set) → cycle detection in undirected graph
