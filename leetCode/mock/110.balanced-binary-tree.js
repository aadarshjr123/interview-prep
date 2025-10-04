var isBalanced = function (root) {
  const checkBalaned = (node) => {
    if (!node) return 0;
    let leftNodeCheck = checkBalaned(node.left);
    if (leftNodeCheck === -1) return -1;
    let rightNodeCheck = checkBalaned(node.right);
    if (rightNodeCheck === -1) return -1;
    if (Math.abs(leftNodeCheck - rightNodeCheck) > 1) return -1;
    return Math.max(leftNodeCheck.rightNodeCheck) + 1;
  };

  return checkBalaned(root) !== -1;
};
