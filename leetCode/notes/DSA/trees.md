# Trees – Basics & Traversals

## 🌳 What is a Tree?
- Hierarchical data structure (like a family tree).  
- Root → Parent → Children → Leaves.
- Binary Tree → Each node has **at most 2 children**.

---

## ✅ Traversals
Ways to visit all nodes in a tree.

### **DFS (Depth-First Search)**
Go **deep** into the tree first.

1. **Preorder** → Root → Left → Right  
👉 Root comes **first**.
```
Example:
    1
   / \
  2   3
Preorder = 1, 2, 3
```

2. **Inorder** → Left → Root → Right  
👉 Root comes **in the middle**.
```
Example:
    1
   / \
  2   3
Inorder = 2, 1, 3
```

3. **Postorder** → Left → Right → Root  
👉 Root comes **last**.
```
Example:
    1
   / \
  2   3
Postorder = 2, 3, 1
```

💡 Trick to remember:
- **Pre**order → Root comes **Pre** (first)
- **In**order → Root is **In** the middle
- **Post**order → Root comes **Post** (last)

---

### **BFS (Breadth-First Search / Level Order)**
Go **level by level** (top → bottom, left → right).
- Uses a **queue**.

```
Example:
    1
   / \
  2   3
 / \
4   5

BFS = 1, 2, 3, 4, 5
```

---

## ⚡ DFS vs BFS (Quick Look)
- **DFS** → Deep first, uses **stack/recursion**.  
- **BFS** → Wide first, uses **queue**.

