var getMiddleOfList = (head) => {
  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
  }

  return slow
}

var reverseList = (head) => {
  let current = head;
  let next = null;
  let pre = null;

  while (current) {
      next = current.next;
      current.next = pre;
      pre = current;
      current = next;
  }

  return pre;
}

/**
* @param {ListNode} head
* @return {void} Do not return anything, modify head in-place instead.
*/
var reorderList = function(head) {
  const mid = getMiddleOfList(head);
  const right = mid.next;

  let left = head;
  mid.next = null;

  let reverseRight = reverseList(right);
  let nextRight = null;
  let nextLeft = null;

  while (reverseRight) {
      nextRight = reverseRight.next;
      nextLeft = left.next;

      left.next = reverseRight;
      reverseRight.next = nextLeft;

      left = nextLeft;
      reverseRight = nextRight;
  }

  return head;
};