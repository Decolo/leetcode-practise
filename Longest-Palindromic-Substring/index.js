/**
 *
 * @param {string} s
 */
var getReverse = function (s) {
  let reverse = "";

  for (let index = s.length - 1; index >= 0; index--) {
    const element = s.charAt(index);
    reverse += element;
  }

  return reverse;
};

var getLSC = function (string1, string2) {
  const table = [[], []];
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (i === 0 || j === 0) {
        table[i][j] = 0;
      } else if (string1.charAt(i) === string2.charAt(j)) {
        table[i][j] = (table[i - 1] ? table[i - 1][j - 1] : 0) || 0;
      } else {
        table[i][j] = Math.max(
          table[i][j - 1] || 0,
          table[i - 1] ? table[i - 1][j] : 0
        );
      }
    }
  }

  debugger
  return table;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const reverseS = getReverse(s);

  getLSC(s, reverseS);
};

longestPalindrome('abcba')
