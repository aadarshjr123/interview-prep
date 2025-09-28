# Big-O Notation (Refresher)

## What is Time Complexity?

-   How fast an algorithm runs as input size grows.
-   Focus = **number of steps**, not actual time.

## What is Space Complexity?

-   How much **extra memory** an algorithm uses.

------------------------------------------------------------------------

## Common Big-O Examples

### O(1) → Constant

-   Always same time, no matter input size.
-   Example: Accessing `arr[i]`.

### O(n) → Linear

-   Time grows with input size.
-   Example: Looping through an array.

### O(n²) → Quadratic

-   Nested loops → work grows very fast.
-   Example: Checking all pairs in an array.

### O(log n) → Logarithmic

-   Problem size **cuts in half** each step.
-   Example: Binary Search.

------------------------------------------------------------------------

👉 **Rule of Thumb:** O(1) \< O(log n) \< O(n) \< O(n²)
