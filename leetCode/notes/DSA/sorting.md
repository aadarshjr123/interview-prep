## Sorting – Simple Notes

### 🔁 Bubble Sort
- **How it works**: Keep swapping neighbors until sorted.
- **Example**: [5, 3, 1]
  - Step 1 → [3, 5, 1]
  - Step 2 → [3, 1, 5]
  - Step 3 → [1, 3, 5]
- ⏱️ Time: O(n²)
- 🧠 Easy but slow → mostly for learning.

---

### ✂️ Merge Sort
- **How it works**: Split → sort → merge.
- **Example**: [4, 2, 1, 3]
  - Split → [4,2] + [1,3]
  - Sort each → [2,4] + [1,3]
  - Merge → [1,2,3,4]
- ⏱️ Time: O(n log n)
- 📦 Space: needs extra arrays
- ✅ Always stable, reliable.

---

### ⚡ Quick Sort
- **How it works**: Pick a pivot → put smaller left, bigger right → repeat.
- **Example**: [5, 2, 8, 1]
  - Pivot = 5 → [2,1] | 5 | [8]
  - Sort left → [1,2]
  - Final → [1,2,5,8]
- ⏱️ Time: Avg O(n log n), Worst O(n²)
- 🚀 Very fast in practice if pivot is good.

---

### 🛠️ Built-in Sort
- **Python & JavaScript** use **Timsort** (mix of Merge + Insertion).
- ⏱️ Time: O(n log n)
- ✅ Optimized for real-world data, stable.

---

💡 **Tip**: When practicing → start with Bubble (simple), then learn Merge & Quick (powerful). Built-in sort is best in real projects.