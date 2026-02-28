var findMinHeightTrees = function(n, edges) {
    if(n===1) return [0]

    let graph = new Array(n).fill().map(() => new Array());
    let degree = new Array(n).fill(0);
    
    for(let [u,v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
        degree[u] +=1
        degree[v] +=1
    }

    let queue = []

    for(let i=0;i<=n-1;i++) {
        if(degree[i] == 1) {
            queue.push(i)
        }
    }

    let remainingNodes = n

    while(remainingNodes > 2) {
        let leafCount = queue.length;
        remainingNodes -= leafCount;

        for(let i=0;i<leafCount;i++) {
            let leaf = queue.shift();
            for(let neighbor of graph[leaf]) {
                degree[neighbor] -= 1
                if(degree[neighbor] == 1) {
                    queue.push(neighbor)
                }
            }

        }
    }
        

    return queue
};