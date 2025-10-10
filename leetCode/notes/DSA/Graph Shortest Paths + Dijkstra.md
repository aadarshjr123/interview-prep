# Graph Shortest Path Algorithms

## 🧩 1. Shortest Path Problem
The goal is to find the **minimum distance (or cost)** to reach from one node to another in a graph.

---

## 🟢 BFS (Breadth-First Search) — For Unweighted Graphs
Works when **all edges have equal weight** (e.g., every edge has cost = 1).

### 💡 Idea
- Start from the source node.
- Visit all neighbors (distance +1).
- Expand layer by layer — the first time you reach a node, it’s via the shortest path.

### ⚙️ Steps
1. Use a **queue**.
2. Mark the distance of the start node as 0.
3. For each node, visit all unvisited neighbors → `dist[neighbor] = dist[node] + 1`.
4. Continue until all nodes are visited or the target is found.

### 🧠 Example
Graph:
```
A - B - C
|   |
D - E
```
Shortest path from A → C:
- A → B → C → distance = 2 ✅

### 🕒 Time Complexity
`O(V + E)` (V = nodes, E = edges)

---

## 🟡 Dijkstra’s Algorithm — For Weighted Graphs
Works when edges have **non-negative weights** (e.g., road distances).

### 💡 Idea
- Always pick the next closest node (minimum distance so far).
- Update (or “relax”) distances to its neighbors.

### ⚙️ Steps
1. Start with all distances = ∞ except source = 0.
2. Use a **min-heap / priority queue** to pick the smallest distance node.
3. For each neighbor:
   ```
   if dist[current] + weight < dist[neighbor]:
       dist[neighbor] = dist[current] + weight
   ```
4. Repeat until all nodes are processed.

### 🧠 Example
```
A --1-- B --2-- C
|       |
4       3
|       |
D-------E
```
Shortest path from A → C:
- A → B → C = 1 + 2 = 3 ✅

### 🕒 Time Complexity
Using Min-Heap → `O((V + E) log V)`

---

## 🧭 Summary Table

| Algorithm | Works For | Uses | Data Structure | Time |
|------------|------------|------|----------------|------|
| **BFS** | Unweighted | Minimum steps | Queue | O(V + E) |
| **Dijkstra** | Weighted (non-negative) | Shortest cost | Priority Queue | O((V + E) log V) |
