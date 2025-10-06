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
// use two pointers, one moves one step at a time, the other moves two steps at a time
// if there is a cycle, they will eventually meet
// if there is no cycle, the fast pointer will reach the end of the list
// if the list is empty or has only one node, return false
// if the list has two nodes and a cycle, return true
// if the list has two nodes and no cycle, return false
// if the list has three nodes and a cycle, return true
// if the list has three nodes and no cycle, return false

// example:
// 1 -> 2 -> 3 -> 4 -> 5
//      ^              |
//      |--------------|
// p1  p2
// 1 -> 2 -> 3 -> 4 -> 5
//      ^              |
//      |--------------|
//          p1    p2
// 1 -> 2 -> 3 -> 4 -> 5
//      ^              |
//      |--------------|
//               p1    p2
// 1 -> 2 -> 3 -> 4 -> 5
//      ^              |
//      |--------------|
//                    p1,p2
// return true

// what pattern problem ?
// two pointers
