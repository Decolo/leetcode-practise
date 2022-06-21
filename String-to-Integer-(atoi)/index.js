/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let isPositive = true;
  let result = 0;

  let fuhao = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s.charAt(i);

    const numberedElement = Number(element);
    if (element === "-") {
      isPositive = false;

      if (++fuhao > 1) {
        return 0
      }
      continue;
    } else if (element === "+") {
      if (++fuhao > 1) {
        return 0
      }
      continue;
    } else if (Number.isNaN(numberedElement) || element === ' ') {

      continue;
    } else if (numberedElement === 0 && result === 0) {

      if (++fuhao > 1) {
        return 0
      }
      continue;
    } else {
      temp = result * 10 + numberedElement;
      if (isPositive && temp > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
      }

      if (!isPositive && temp > Math.pow(2, 31)) {
        return -Math.pow(2, 31);
      }

      if (numberedElement === 0){
        continue;
      } else {
        result = temp;
      }
    }
  }

  return result * (isPositive ? 1 : -1);
};

console.log(myAtoi("-91283472332"));
console.log(myAtoi("+1"));
console.log(myAtoi('4193 with words'))
console.log(myAtoi("+-12"));
console.log(myAtoi("21474836460"));
console.log(myAtoi("00000-42a1234"));
console.log(myAtoi("   -42"));
