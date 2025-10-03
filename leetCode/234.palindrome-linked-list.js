/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let slow = head,
    fast = head;
  const stack = [];

  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) slow = slow.next;

  while (slow) {
    const top = stack.pop();
    if (top !== slow.val) return false;
    slow = slow.next;
  }

  return true;
};

// @lc code=end

// time: O(n)
// space: O(n)
// use stack to store the first half of the list
// then compare the second half with the stack
// if they are the same, then it's a palindrome
// if not, then it's not a palindrome
// if the list has odd number of nodes, we skip the middle node
// use fast and slow pointers to find the middle of the list
// fast pointer moves 2 steps at a time, slow pointer moves 1 step at a time
// when fast pointer reaches the end, slow pointer will be at the middle
// if fast pointer is not null, it means the list has odd number of nodes
// so we move slow pointer one step further to skip the middle node
// then we compare the second half of the list with the stack
// if they are the same, then it's a palindrome
// if not, then it's not a palindrome
// we pop from the stack and compare with the slow pointer
// if they are not the same, we return false
// if we reach the end of the list and all nodes are the same, we return true
// the time complexity is O(n) because we traverse the list twice
// the space complexity is O(n) because we use a stack to store the first half of the list

//examples
// head = [1,2,2,1] => true
// head = [1,2] => false
// head = [1,2,3,2,1] => true
// head = [1,2,3,4,2,1] => false
// head = [1] => true
// head = [] => true
