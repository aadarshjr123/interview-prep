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
