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

const newList = mergeTwoLists(
  new ListNode(1, new ListNode(4, new ListNode(5, null))),
  new ListNode(1, new ListNode(3, null))
)

debugger
