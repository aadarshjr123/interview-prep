var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length) {
    let currentLevel = queue.length;
    for (let i = 0; i < currentLevel; i++) {
      let node = queue.shift();

      if (i === queue.length - 1) {
        result.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};
