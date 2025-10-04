var maxPathSum = function (root) {
  let maxSum = -Infinity;
  function checkMaxPath(node) {
    if (!node) return 0;
    let leftNode = Math.max(0, checkMaxPath(node.left));
    let rightNode = Math.max(0, checkMaxPath(node.right));
    maxSum = Math.max(maxSum, node.val + leftNode + rightNode);
    return node.val + Math.max(leftNode, rightNode);
  }
  checkMaxPath(root);
  return maxSum;
};
