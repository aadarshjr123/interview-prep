# 🌳 Trees in DSA

## Basics
- A **tree** is a hierarchical data structure made of **nodes**.
- Each node contains data and links (edges) to children.

### Key Terms
- **Root** → top-most node.
- **Parent** → a node that has children.
- **Child** → node that descends from a parent.
- **Leaf** → node with no children.
- **Edge** → link between parent and child.
- **Height** → longest path from root to a leaf.

---

## Types
- **General Tree** → any number of children per node.
- **Binary Tree** → each node has at most **2 children** (left, right).
- **Binary Search Tree (BST)** → special binary tree:
  - Left child < Parent < Right child.
  - In-order traversal gives **sorted values**.

---

## Traversal Types
Traversal = visiting every node in the tree. Always **O(n)** since every node is visited once.

### 1️⃣ Pre-order (Root → Left → Right)
- Visit root first, then left, then right.
- **Use case:** saving/copying tree, prefix expressions.

### 2️⃣ In-order (Left → Root → Right)
- Visit left, then root, then right.
- **Use case:** in BST → gives sorted order.

### 3️⃣ Post-order (Left → Right → Root)
- Visit children first, then root.
- **Use case:** deleting/freeing tree, postfix expressions.

### 4️⃣ Level-order (Breadth-First)
- Visit level by level (top to bottom).
- **Use case:** shortest path in unweighted tree, hierarchy printing.

---

## ✅ Summary
| Traversal | Order | Use Case |
|-----------|-------|----------|
| Pre-order | Root → Left → Right | Save/clone tree |
| In-order  | Left → Root → Right | Sorted values in BST |
| Post-order| Left → Right → Root | Delete tree, postfix eval |
| Level-order | Level by level | Shortest path, hierarchy |