/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
// @lc code=end

// time: O(n)
// space: O(1)

// iterative
// use three pointers: prev, current, next
// prev is the previous node, current is the current node, next is the next node
// initially, prev is null, current is head, next is null
// while current is not null, do the following:
// 1. set next to current.next
// 2. set current.next to prev
// 3. set prev to current
// 4. set current to next
// finally, return prev, which is the new head of the reversed list

// example:
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// prev  current next
// null   1      null
// null   1      2
// 1 -> null  2      3
// 2 -> 1 -> null  3
// 3 -> 2 -> 1 -> null  4
// 4 -> 3 -> 2 -> 1 -> null  5
// 5 -> 4 -> 3 -> 2 -> 1 -> null  null
// return prev, which is 5 -> 4 -> 3 -> 2 -> 1 -> null
// if the list is empty, return null
// if the list has only one node, return the node itself
// if the list has two nodes, swap them and return the new head
// if the list has three or more nodes, reverse them iteratively as described above
// this algorithm works for both even and odd length lists
