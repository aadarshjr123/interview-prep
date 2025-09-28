# Linked List Notes

## Basics
- A **linked list** is a linear data structure where elements (nodes) are connected using **pointers**.
- Each **node** has:
  - `data` → stores the value
  - `next` → pointer to the next node

Example (singly linked list):
```
[10 | next] → [20 | next] → [30 | null]
```

## Types
1. **Singly Linked List**
   - Each node points only to the next node.
   - Can move forward only.

2. **Doubly Linked List**
   - Each node has two pointers: `prev` and `next`.
   - Can move forward and backward.

3. **Circular Linked List**
   - Last node points back to the head.
   - Can be singly or doubly circular.

---

## Operations & Time Complexity

### Insertion
- **Insert at Head** → O(1)
  - Add new node before the head.

- **Insert at Tail (with tail pointer)** → O(1)
  - Add new node after tail and move tail forward.

- **Insert at Tail (without tail pointer)** → O(n)
  - Must traverse entire list from head to find the last node.

### Search
- **Search by value** → O(n)
  - Must check each node one by one.

### Deletion
- **Delete Head** → O(1)
  - Move head to head.next.

- **Delete Tail** → O(n) (without tail.prev)
  - Must traverse to second-last node.

- **Delete by Value** → O(n)
  - Search node first, then adjust links.

---

## When to Use Tail Pointer
- ✅ Keep tail pointer if frequent **insert at tail** (e.g., Queue).
- ❌ Skip tail pointer if insertions mostly at head (e.g., Stack) or list is small.

---

## Should Linked List Be Sorted?
- A linked list can be **sorted or unsorted**, depending on use case.
- **Binary search is inefficient** on linked lists because accessing the middle node is O(n).
- Keep sorted if you need ordered traversal (e.g., priority-based operations).
- Keep unsorted for general-purpose insertion/deletion/queue/graph adjacency.

---

## Quick Comparison with Array
| Feature              | Array       | Linked List |
|----------------------|-------------|-------------|
| Memory layout        | Contiguous  | Scattered (pointers) |
| Access by index      | O(1)        | O(n) |
| Insert/Delete head   | O(n)        | O(1) |
| Insert/Delete tail   | O(1)        | O(1) with tail pointer / O(n) without |
| Extra memory         | None        | Pointer(s) |
