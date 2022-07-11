var removeNthFromEnd = function(head, n) {
  if (n === 0) return head;


  let start = head;
  let end = head;
  let pre = null;

  while (n > 1) {
      start = start.next;
      n--;
  }

  while (start.next) {
      start = start.next;
      pre = end;
      end = end.next;
  }

  if (start === end) {
      if (pre) {
          pre.next = null;
          return head;
      } else {
          return null;
      }
  } else {
      end.val = end.next.val;
      end.next = end.next.next;

      return head;
  }



};