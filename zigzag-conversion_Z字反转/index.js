/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 3) return s;

  const table = new Array(numRows).fill(0).map(() => []);

  let curretRow = 0;
  let trun = false
  for (let index = 0; index < s.length; index++) {
    const element = s.charAt(index);

    if (curretRow === 0 || curretRow === numRows - 1) {
      trun = !trun;
    }

    table[curretRow].push(element);
    curretRow = curretRow + (trun ? 1 : -1)
  }


  return table.map(row => row.join('')).join('')
};

console.log(convert('ABCDEFG', 3))

console.log(convert("PAYPALISHIRING", 3) === 'PAHNAPLSIIGYIR')
