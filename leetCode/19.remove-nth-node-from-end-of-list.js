/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return head;
};
// @lc code=end

// time: O(n)
// space: O(1)
// two pointers
// fast will be n nodes ahead of slow
// when fast reaches the end, slow will be at the node before the one we want to remove
// if fast is null after the first loop, it means we need to remove the head
// so we return head.next

// example:
// 1 -> 2 -> 3 -> 4 -> 5, n = 2
// fast          slow
// 1 -> 2 -> 3 -> 4 -> 5
//      fast          slow
// 1 -> 2 -> 3 -> 4 -> 5
//           fast          slow
// 1 -> 2 -> 3 -> 4 -> 5
//                fast          slow
// 1 -> 2 -> 3 -> 4 -> 5
//                     fast          slow
// 1 -> 2 -> 3 -> 4 -> 5
//                slow.next = slow.next.next
// return head
// if the list has only one node, return null
// if the list has two nodes and n = 1, remove the second node
// if the list has two nodes and n = 2, remove the first node
// if the list has three nodes and n = 1, remove the third node
// if the list has three nodes and n = 2, remove the second node
// if the list has three nodes and n = 3, remove the first node
// if n is greater than the length of the list, do nothing and return the head
// if n is equal to the length of the list, remove the head and return head.next

// what pattern problem ?
// two pointers
