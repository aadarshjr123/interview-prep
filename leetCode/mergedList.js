class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeTwoLists(list1, list2) {
  const dummy = new Node(-1);
  let mergedList = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.value <= list2.value) {
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
