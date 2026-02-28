var findRedundantConnection = function(edges) {
    let n = edges.length
    let parent = new Array(n+1)

    for(let i=0;i<=n;i++) {
        parent[i] = i
    }

    function find(x){
        if(parent[x] !=x) {
            parent[x] = find(parent[x])
        }

        return parent[x]
    }   

    function union(x,y) {
        let rootX = find(x)
        let rootY = find(y)

        if(rootX === rootY) {
            return false
        }

        parent[rootY] = rootX
        return true
    }

    for(let[u,v] of edges) {
        if(union(u,v) === false) {
            return [u,v]
        }
    }
    return []
    
};