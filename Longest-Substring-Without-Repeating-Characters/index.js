// O(n^3)
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    let temp = "" + char;
    for (let j = i + 1; j < s.length; j++) {
      if (!temp.includes(s.charAt(j))) {
        temp += s.charAt(j);
      } else {
        break;
      }
    }

    longest = Math.max(longest, temp.length);
  }

  return longest;
};

// O(n)
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let l = 0;
  let r = 0;
  let longest = 0;
  const n = s.length;

  while (l < n && r < n) {
    const current = s.charAt(r);
    if (!set.has(current)) {
      set.add(current);
      r++;
      longest = Math.max(longest, r - l, 1);
    } else {
      set.delete(s.charAt(l++));
    }
  }

  return longest;
};

var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  const map = {};
  let longest = 1;

  for (let j = 0, i = 0; j < s.length; j++) {
    if (typeof map[s.charAt(j)] === "number") {
      i = Math.max(map[s.charAt(j)] + 1, i);
    }

    longest = Math.max(longest,  j - i + 1);
    map[s.charAt(j)] = j; //下标 + 1 代表 i 要移动的下个位置
  }

  return longest;
};

// 'abcabcbb'
// expect: 3
console.log(lengthOfLongestSubstring("abcabcbb"));

// // 'aab'
// expect: 2
console.log(lengthOfLongestSubstring("aab"));

// "pwwkew"
// expoect: 3
console.log(lengthOfLongestSubstring("pwwkew"));
// slicing window

// "dvdf"
// expect: 3
console.log(lengthOfLongestSubstring("dvdf"));

// "abba"
// expect: 2
console.log(lengthOfLongestSubstring("abba"));
