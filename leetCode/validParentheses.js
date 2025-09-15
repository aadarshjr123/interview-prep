function validParentheses(s) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };

  for (let char in s) {
    if ((char === "[") | (char === "{") | (char === "(")) {
      stack.push(char);
    } else {
      if (stack.pop !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Time complexity - O(n)
