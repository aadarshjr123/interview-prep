var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function dfs(node){
        if(!node) {
            return 0;
        }

        let leftGain = Math.max(0,dfs(node.left))
        let rightGain = Math.max(0,dfs(node.right))

        maxSum = Math.max(maxSum,node.val + leftGain + rightGain)

        return node.val + Math.max(leftGain,rightGain)
    }

    dfs(root)

    return maxSum;
};