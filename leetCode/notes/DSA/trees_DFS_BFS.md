# 🌳 Tree Traversals & Search Notes

## DFS vs BFS

### **DFS (Depth-First Search)**
- Explore as deep as possible before backtracking.
- Uses **recursion** (implicit stack) or an explicit stack.
- Space Complexity: **O(h)** (h = tree height)
  - Balanced tree: O(log n)
  - Skewed tree: O(n)
- Best for:
  - Subtree problems (max depth, path sum)
  - Checking paths

**Order Variants:**
- Preorder: Root → Left → Right
- Inorder: Left → Root → Right
- Postorder: Left → Right → Root

**Code (recursive example):**
```js
function dfs(node) {
  if (!node) return;
  dfs(node.left);
  console.log(node.val);
  dfs(node.right);
}
```

---

### **BFS (Breadth-First Search)**
- Visit level by level.
- Uses a **queue** (FIFO).
- Space Complexity: **O(n)** in worst case (queue may store all nodes in a level).
- Best for:
  - Shortest path (unweighted graphs)
  - Level order traversal

**Code (queue example):**
```js
function bfs(root) {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
}
```

---

## 🌱 Space Trade-offs
- **DFS → O(h):** Only path from root to leaf is stored.
- **BFS → O(n):** Whole level may need to be stored.

👉 **Rule of Thumb:**
- Use DFS when depth-related.
- Use BFS when shortest path or level order is needed.

