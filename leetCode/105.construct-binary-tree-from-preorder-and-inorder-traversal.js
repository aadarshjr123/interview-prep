var buildTree = function(preorder, inorder) {
    const map = new Map();
    for (let i=0;i < inorder.length; i++) {
        map.set(inorder[i],i)
    }

    function helper(preStart,preEnd,inStart,inEnd) {
        if(preStart > preEnd || inStart > inEnd) {
            return null;
        }

        let rootVal = preorder[preStart];
        let root = new TreeNode(rootVal);
        let inIndex = map.get(rootVal);
        let leftSize = inIndex - inStart;

        root.left = helper(preStart + 1,preStart + leftSize,inStart,inIndex -1)
        root.right= helper(preStart + leftSize + 1, preEnd,inIndex +1,inEnd)

        return root;
    }


    return helper(0,preorder.length -1,0,inorder.length -1)
};