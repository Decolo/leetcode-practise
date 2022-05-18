const getReverse = (s) => {
  let sum = ''
  for (let i = s.length -1; i > -1; i--) {
      sum += s.charAt(i);
  }

  return sum;
}


/**
* @param {number} x
* @return {number}
*/
var reverse = function(x) {
  if (x === 0) return 0;

  const isPositive = x >= 0;

  const string = String(x);
  const reverseString = getReverse(string);
  debugger
  const result = [];

  for (let i = 0; i < reverseString.length; i++) {
      const current = reverseString.charAt(i);
      if (result.length === 0 && parseInt(current) === 0) {

      } else {
          result.push(parseInt(current));
      }
  }

  return parseInt(result.join('')) * (isPositive ? 1 : -1)
};

reverse(123)