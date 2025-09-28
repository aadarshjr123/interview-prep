# Binary Search Variants

## 1. Standard Binary Search
- Goal: Find exact target value in sorted array.
- Returns: Index of the target, or -1 if not found.

---

## 2. Lower Bound Search
- **Definition**: First index where `nums[index] >= target`.
- If all numbers are smaller than target → returns `nums.length`.
- Useful for: Finding insert position (e.g., in C++ `lower_bound`).

**Example:**
```
nums = [2, 4, 6, 8]
target = 5
lower bound = index 2 (value 6)
```

---

## 3. Upper Bound Search
- **Definition**: First index where `nums[index] > target`.
- If no number is greater than target → returns `nums.length`.
- Useful for: Range queries, binary search insert after duplicates.

**Example:**
```
nums = [2, 4, 6, 8]
target = 6
upper bound = index 3 (value 8)
```

---

## 4. Finding Insert Position
- Similar to **lower bound**.
- If element exists → returns its index.
- If element doesn’t exist → returns position where it should be inserted to keep array sorted.

---

## 5. Finding Peak Element
- Peak = element greater than its neighbors.
- Binary search by checking slope:
  - If `nums[mid] < nums[mid+1]` → go right (uphill, peak must be right).
  - Else → go left (downhill, peak on left or at mid).
- Eventually `left == right` → index of a peak.

---

✅ Summary:
- **Lower Bound** → first `>= target`
- **Upper Bound** → first `> target`
- **Insert Position** → like lower bound
- **Peak Search** → follow slope until a peak

