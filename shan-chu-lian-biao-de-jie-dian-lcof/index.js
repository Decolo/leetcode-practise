/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
  let pre = null;
  let current = head;

  while (current) {
      if (current.val === val) {
          if (current.next) {
              current.val = current.next.val;
              current.next = current.next.next;
          } else {
              pre.next = null;
          }

          break;
      }

      pre = current;
      current = current.next
  }

  return head;
};