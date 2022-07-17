/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle1 = function (head) {
  const visited = new Set();
  while (head !== null) {
    //终止条件，如果没有环 跳出循环
    if (visited.has(head)) {
      //如果存在重复的节点，这个节点就是入环节点
      return head;
    }
    visited.add(head); //将节点加入set中
    head = head.next;
  }
  return null;
};

var detectCycle = function (head) {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (!fast) return null;

    if (fast === slow) {
      break;
    }
  }

  if (!fast.next) return null;

  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
