# Linked List Notes

## Removing Nodes

### 1. Remove from Head
- Just move the `head` pointer to the second node.
- Example:
  ```
  1 → 2 → 3 → 4
  Remove head → 2 → 3 → 4
  ```

### 2. Remove from Tail
- Traverse until the node **before the last one**.
- Set its `.next = null`.
- Example:
  ```
  1 → 2 → 3 → 4
  Remove tail → 1 → 2 → 3
  ```

### 3. Remove from Middle (position `k`)
- Find the node before position `k`.
- Redirect its `.next` to skip the target node.
- Example:
  ```
  1 → 2 → 3 → 4
  Remove node at position 2 → 1 → 3 → 4
  ```

### 4. Remove N-th Node From End
- Use two pointers (`fast` and `slow`).
- Move `fast` `n` steps ahead.
- Move both until `fast` reaches the end.
- `slow` will be just before the node to delete.
- Example:
  ```
  1 → 2 → 3 → 4 → 5, n=2
  Result: 1 → 2 → 3 → 5
  ```

---

## Palindrome Checking in Linked List

### Goal
Check if a list reads the same forwards and backwards.

Example:
```
1 → 2 → 2 → 1 → Palindrome ✅
```

### Steps
1. **Find the middle (fast + slow pointers)**
   - `fast` moves 2 steps, `slow` moves 1 step.
   - When `fast` reaches the end, `slow` is at the middle.

2. **Push first half into a stack**
   - While moving `slow`, store values in a stack.
   - Stack reverses the order.

3. **Handle odd length**
   - If list has odd length, skip the middle node.

4. **Compare second half with stack**
   - Move `slow` through the second half.
   - Pop from stack and compare.
   - If all match → Palindrome ✅

### Example Walkthrough
```
1 → 2 → 2 → 1

Stack after first half: [1, 2]

Compare:
- slow=2, pop=2 → match
- slow=1, pop=1 → match

All matched → Palindrome ✅
```

---

## Key Takeaways
- Removing = adjusting `.next` pointers carefully.
- Palindrome = two-pointer middle + stack (or reverse second half alternative).

