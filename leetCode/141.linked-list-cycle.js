/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let current = head;
  let p1 = head;
  let p2 = head.next.next;

  while (current) {
    if (p1 === p2) return true;
    if (!p2) return false;
    p1 = p1.next;
    p2 = p2?.next?.next;
    current = current.next;
  }
};
// @lc code=end

// time: O(n)
// space: O(1)
// floyd's cycle-finding algorithm
