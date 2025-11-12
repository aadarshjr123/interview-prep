# 🧠 Dynamic Programming (DP) — Simple Notes

## 🌱 What is DP?
Dynamic Programming (DP) is a way to solve **complex problems by breaking them into smaller subproblems**, solving each subproblem once, and storing the result for reuse.

It’s used when problems have **overlapping subproblems** and **optimal substructure**.

---

## 🧩 Example Analogy
Imagine climbing stairs — you can climb 1 or 2 steps at a time. To reach step `n`, you can come from `n-1` or `n-2`. If you already know how many ways to reach those, you can add them to find ways to reach `n`.

That’s DP! You reuse past results instead of recalculating.

---

## ⚙️ Two Main Types of DP

### 1. **Top-Down (Memoization)**
- Think: Recursion + cache
- You solve the problem recursively and store already computed results.
- Example:
  ```js
  function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
  }
  ```

### 2. **Bottom-Up (Tabulation)**
- Think: Iterative + table
- You start from the smallest case and build up.
- Example:
  ```js
  function fib(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
  }
  ```

---

## 🧱 Key Concepts

| Term | Meaning |
|------|----------|
| **Subproblem** | A smaller version of the main problem |
| **Overlapping Subproblems** | Same calculation appears multiple times |
| **Optimal Substructure** | The best solution is made of smaller best solutions |
| **State** | Represents what subproblem you’re solving |
| **Transition** | Formula to move between subproblems |

---

## 🔍 How to Identify a DP Problem
✅ The problem asks for **maximum, minimum, count, or true/false**.  
✅ It has **choices** (take or skip, include or exclude, etc.).  
✅ It can be expressed in **terms of smaller subproblems**.

---

## 💡 Common DP Patterns
1. **Fibonacci type** → `dp[i] = dp[i-1] + dp[i-2]`
2. **Knapsack type** → Choose or skip items for max value.
3. **Grid paths** → Move in grid minimizing or maximizing cost.
4. **Subsequence problems** → LIS, LCS, Edit distance.

---

## 🧮 Example — Climbing Stairs
```js
function climbStairs(n) {
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}
```
- Base cases: `dp[0] = 1`, `dp[1] = 1`
- Transition: `dp[i] = dp[i-1] + dp[i-2]`

---

## 🚀 DP Mindset
When stuck:
1. Ask: “Can I divide this into smaller problems?”
2. Write recurrence relation.
3. Decide top-down or bottom-up.
4. Optimize space if possible.

---

## 🧠 Tip
> DP = Remember what you already solved.

Use tables or maps — computers are good at remembering!

