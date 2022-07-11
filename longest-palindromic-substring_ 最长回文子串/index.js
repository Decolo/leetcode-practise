var isPalindromic = (s) => {
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s.charAt(i) != s.charAt(len - i - 1)) {
      return false;
    }
  }
  return true;
};
/** dynamic program */



/**  center  */
/**
 * get palindromic length
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @returns
 */
const getPalindromicLen = function (s, left, right) {
  let len = 0;

  while (left >= 0 && right <= s.length - 1) {
    if (s.charAt(left) === s.charAt(right)) {
      len++;
      left--;
      right++;
    } else {
      break;
    }
  }
  return {
    len,
  };
};


var longestPalindrome = function (s) {
  const len = s.length;
  if (len === 1) {
    return s;
  }

  if (len === 2) {
    return isPalindromic(s) ? s : s.charAt(0);
  }

  let left = 0;
  let right = 0;
  let maxLen = 1;

  for (let i = 0; i < len; i++) {
    const { len: lenOdd } = getPalindromicLen(s, i - 1, i + 1);
    const { len: lenEven } = getPalindromicLen(s, i, i + 1);
    // debugger;
    const finalLenOdd = lenOdd * 2 + 1;
    const finalLenEven = lenEven * 2;

    if (finalLenEven > finalLenOdd) {
      if (finalLenEven > maxLen) {
        // debugger
        maxLen = finalLenEven;
        left = Math.max(i - lenEven + 1, 0);
        right = Math.min(i + lenEven, len - 1);
      }
    } else {
      if (finalLenOdd > maxLen) {
        // debugger
        maxLen = finalLenOdd;
        left = Math.max(i - lenOdd, 0);
        right = Math.min(i + lenOdd, len - 1);
      }
    }
  }

  return s.substring(left, right + 1);
};

// "babad"
// expect: bab
console.log(longestPalindrome("babad"));

// "aacabdkacaa"
// expect: aca
console.log(longestPalindrome("aacabdkacaa"));

// "aacdefcaa"
// expect "aa"
console.log(longestPalindrome("aacdefcaa"));

// expect "bb"
console.log(longestPalindrome("abcdbbfcba"));

// expect "a"
console.log(longestPalindrome("abcda"));
