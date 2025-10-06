function isValid(s) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Time complexity - O(n)
// Space complexity - O(n)
// use a stack to keep track of opening brackets
// when we encounter a closing bracket, we check if it matches the top of the stack
// if it does, we pop the stack and continue
// if it doesn't, we return false
// at the end, if the stack is empty, we return true, otherwise false

// examples
// "()" => true
// "()[]{}" => true
// "(]" => false
// "([)]" => false
// "{[]}" => true

// what pattern problem ?
// stack, string parsing
