const { strict: assert } = require("assert");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let headingNode = null;
  let currentNode = null;
  while (l1 !== null && l2 !== null) {
    const sum = l1.val + l2.val + carry;
    const currentValue = sum % 10;
    carry = Math.floor(sum / 10);

    if (!headingNode) {
      headingNode = new ListNode(currentValue, null);
      currentNode = headingNode;
    } else {
      currentNode.next = new ListNode(currentValue, null);
      currentNode = currentNode.next;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1 !== null) {
    const sum = l1.val + carry;
    const currentValue = sum % 10;
    carry = Math.floor(sum / 10);

    if (!headingNode) {
      headingNode = new ListNode(currentValue, null);
      currentNode = headingNode;
    } else {
      currentNode.next = new ListNode(currentValue, null);
      currentNode = currentNode.next;
    }

    l1 = l1.next;
  }

  while (l2 !== null) {
    const sum = l2.val + carry;
    const currentValue = sum % 10;
    carry = Math.floor(sum / 10);

    if (!headingNode) {
      headingNode = new ListNode(currentValue, null);
      currentNode = headingNode;
    } else {
      currentNode.next = new ListNode(currentValue, null);
      currentNode = currentNode.next;
    }

    l2 = l2.next;
  }

  if (carry) {
    currentNode.next = new ListNode(1, null);
  }
  debugger;
  return headingNode;
};

function getListNode(
  /**
   * @type {number[]}
   */
  arr
) {
  let headNode = null;
  let current = null;

  arr.forEach((item) => {
    if (!headNode) {
      headNode = new ListNode(item);
      current = headNode;
    } else {
      current.next = new ListNode(item);
      current = current.next;
    }
  });

  return headNode;
}

// const l1 = getListNode([2, 4, 3])
// const l2 = getListNode([5, 6, 4]);
// addTwoNumbers(l1, l2);

// const l1 = getListNode([2, 4]);
// const l2 = getListNode([5, 6, 4, 3]);
// expect
// 3465 + 42 = 3507;

// const l1 = getListNode([9, 9, 9, 9, 9, 9, 9]);
// const l2 = getListNode([9, 9, 9, 9]);
// expect
// 9999 + 9999999 =

// const l1 = getListNode([0]);
// const l2 = getListNode([0]);
// expect
// 0

const l1 = getListNode([9]);
const l2 = getListNode([9]);
// expect
// 18
console.log(addTwoNumbers(l1, l2));