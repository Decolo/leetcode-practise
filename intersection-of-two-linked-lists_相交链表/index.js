var getIntersectionNode = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;

  while (currentA || currentB) {
    if (currentA === currentB) {
      // console.log('val', currentA.val)
      return currentA;
    } else {
      currentA = currentA === null ? headB : currentA.next;
      currentB = currentB === null ? headA : currentB.next;
    }
  }

  return null;
};
