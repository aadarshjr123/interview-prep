function mergeTwoLists(list1, list2) {
  const dummy = new ListNode();
  let mergedList = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }

    mergedList = mergedList.next;
  }

  mergedList.next = list1 !== null ? list1 : list2;

  return dummy.next;
}

// Time complexity - O(n)
// Space complexity - O(1)
// two pointers
// compare the values of the two lists
// add the smaller value to the merged list
// move the pointer of the list from which the value was taken
// if one list is exhausted, add the remaining values of the other list to the merged list
// use a dummy node to simplify the code
// return the next node of the dummy node as the head of the merged list

// example:
// list1: 1 -> 3 -> 5
// list2: 2 -> 4 -> 6
// mergedList: dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
// return mergedList.next

// what pattern problem ?
// linked list two pointers
