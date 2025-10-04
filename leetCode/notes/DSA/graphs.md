
# 🧭 Graphs – Notes

## 🌐 What is a Graph?
A **graph** is a collection of **nodes (vertices)** connected by **edges (links)**.

Example:
```
A —— B
|    |
C —— D
```
- Nodes: A, B, C, D  
- Edges: AB, AC, BD, CD  

---

## 🧩 Types of Graphs

| Type | Meaning | Example |
|------|----------|----------|
| **Undirected** | Roads work both ways | A ↔ B |
| **Directed** | One-way roads | A → B |
| **Weighted** | Edges have cost/distance | A --5→ B |
| **Unweighted** | No weights, all edges equal | A — B |
| **Cyclic** | Contains a loop | A → B → C → A |
| **Acyclic** | No loops | A → B → C |
| **Connected** | All nodes reachable | Every node has a path |
| **Disconnected** | Some nodes isolated | Not all nodes connected |

🧠 *Weighted* can be **directed or undirected** — weight only means a value (distance, cost, etc.).

---

## 🗂️ Representations

### 1. **Adjacency List**
Stores neighbors of each node.

Example:
```python
graph = {
  "A": ["B", "C"],
  "B": ["A", "D"],
  "C": ["A", "D"],
  "D": ["B", "C"]
}
```
- Space: **O(V + E)**
- Efficient for **sparse graphs**

---

### 2. **Adjacency Matrix**
2D table showing connections.

|   | A | B | C | D |
|---|---|---|---|---|
| A | 0 | 1 | 1 | 0 |
| B | 1 | 0 | 0 | 1 |
| C | 1 | 0 | 0 | 1 |
| D | 0 | 1 | 1 | 0 |

- 1 = connected  
- 0 = not connected  
- Space: **O(V²)**
- Good for **dense graphs**

---

## 🔁 Traversals

### 1. **BFS (Breadth-First Search)**
- Uses **Queue (FIFO)**  
- Visits nodes level by level  
- Finds **shortest path** in unweighted graphs  

**Steps (Start = A):**
```
Visit A → Queue [A]
Neighbors: B, D → [B, D]
Then visit B → add E → [D, E]
```
**Order:** A → B → D → E → C

**Use cases:** Shortest path, spreading (network, infection).

---

### 2. **DFS (Depth-First Search)**
- Uses **Recursion or Stack (LIFO)**  
- Goes deep before backtracking  
- Used for **cycle detection**, **connectivity**, **topological sort**

**Steps (Start = A):**
```
A → B → E → backtrack → D → C
```
**Order:** A → B → E → D → C

**Use cases:** Detect cycles, explore connected components.

---

## 🧠 Summary

| Concept | BFS | DFS |
|----------|-----|-----|
| Data Structure | Queue | Stack / Recursion |
| Order | Level by level | Deep first |
| Best For | Shortest path | Connectivity, cycle detection |
| Space | O(V) | O(V) |
| Time | O(V + E) | O(V + E) |

---

## 💡 Real-Life Uses
| Application | Nodes | Edges |
|--------------|--------|--------|
| Google Maps | Cities | Roads (weighted) |
| Internet | Computers | Network cables |
| Social Media | People | Friend connections |
| Games | Levels | Possible moves |
| AI Search | States | Transitions |

---

**Quick Tip:**  
Graphs = relationships.  
Edges = connections.  
Traversal = exploration.
