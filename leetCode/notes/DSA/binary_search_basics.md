## Binary Search Basics

**Concept:**
- Binary Search works on sorted arrays.
- At each step, cut the search space in half.
- Compare the middle element with the target.
- Decide whether to search the left half or the right half.
- Repeat until found or the search space becomes empty.

**Time Complexity:**
- Each step halves the array → O(log n).

**Pseudocode:**
```
left = 0, right = n - 1
while left <= right:
    mid = left + (right - left) // 2
    if arr[mid] == target:
        return mid
    else if arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
return -1 (not found)
```

**Edge Cases:**
- Be careful with `left <= right` vs `left < right`.
- Always recalculate `mid` after updating `left` or `right`.
- Use `mid = left + (right - left) // 2` to avoid overflow (in some languages).

**Visualization:**
- Example: Find 7 in [1, 3, 5, 7, 9]
  - mid = 2 → arr[2] = 5 < 7 → search right half
  - mid = 3 → arr[3] = 7 = target → found