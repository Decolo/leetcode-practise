/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

  const len1 = num1.length;
  const len2 = num2.length;

  const maxLen = len1 + len2;
  const result = [];
  let temp = maxLen;
  while (temp) {
    result.push(0);
    temp--;
  }

  for (let i = len1 - 1; i > -1; i--) {
    for (let j = len2 - 1; j > -1; j--) {
      const val1 = Number(num1.charAt(i));
      const val2 = Number(num2.charAt(j));

      const sum = result[i + j + 1] + val1 * val2;
      result[i + j + 1] = sum % 10;
      const _sum = Math.floor(sum / 10) + result[i + j];
      result[i + j] = _sum;
    }
  }
  // console.log(result)
  let resultString = '';
  for (let index = 0; index < result.length; index++) {
    const element = result[index];

    if (!resultString && element === 0) {
      continue
    }

    resultString += element
  }

  return resultString || '0';
};

console.log(multiply('9', '9'))
console.log(multiply('34', '12'))
console.log(multiply('34', '99'))
console.log(multiply('99', '123'))
console.log(multiply('0', '0'))
