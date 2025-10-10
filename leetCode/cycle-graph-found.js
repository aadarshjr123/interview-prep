var hasCycle = function (numNodes, edges) {
  let adj = Array.from({ length: numNodes }, () => []);
  let state = Array.from(numNodes).fill(0);

  for (let [from, to] of edges) {
    adj[from].push(to);
  }

  const dfs = (node) => {
    if (state[node] === 1) return true;
    if (state[node] === 2) return false;
    state[node] = 1;

    for (let next of adj[node]) {
      if (dfs(next)) return true;
    }

    state[node] = 2;
    return false;
  };

  for (let i = 0; i < numNodes; i++) {
    if (state[i] === 0) {
      if (dfs(i)) return true;
    }
  }

  return false;
};

//example
// numNodes=2
// edges = [[0,1], [1,2], [2,0]]
