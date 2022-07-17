const reverseList = (head) => {
  let cur = head;
  let pre = null;
  let next = null;

  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// const test = new ListNode(1, new ListNode(2, new ListNode(3)))
// const reverseTest = reverseList(test)

const reorderList = (head) => {
  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let mid = slow;

  let right = reverseList(mid.next);
  mid.next = null;
  let left = head;
  let nextLeft = null;
  let nextRight = null;

  while (right) {
    nextLeft = left.next;
    nextRight = right.next;
    left.next = right;
    right.next = nextLeft;
    left = nextLeft;
    right = nextRight;
  }

  return head;
};

const test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
const reverseTest = reorderList(test)
debugger
