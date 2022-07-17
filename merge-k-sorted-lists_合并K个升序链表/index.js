function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = (l1, l2) => {
  let current = new ListNode(0, null);
  let head = current;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  return head.next;
};

var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  if (lists.length === 1) return lists[0];

  if (lists.length === 2) {
    return mergeTwoLists(lists[0], lists[1]);
  }

  const midIndex = Math.floor(lists.length / 2);

  return mergeTwoLists(
    mergeKLists(lists.slice(0, midIndex + 1)),
    mergeKLists(lists.slice(midIndex + 1))
  );
};

debugger;
