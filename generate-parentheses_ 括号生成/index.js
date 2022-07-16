/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return [];
  let result = ["()"];
  while (n > 1) {
    const _result = [];
    const map = {};

    for (let i = 0; i < result.length; i++) {
      const current = result[i];

      for (let j = 0; j < current.length; j++) {
        const char = current.charAt(j);

        if (char === "(") {
          const temp = current.slice(0, j + 1) + "()" + current.slice(j + 1);

          if (!map[temp]) {
            map[temp] = 1;
            _result.push(temp);
          }
        }
      }

      if (!map[current + "()"]) {
        map[current + "()"] = 1;

        _result.push(current + "()");
      }

      if (!map["()" + current]) {
        map["()" + current] = 1;

        _result.push("()" + current);
      }
    }

    result = _result;
    n--;
  }

  return result;
};
