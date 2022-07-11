var reverse = function(x) {
  if (x === 0) return 0;

  let isPositive;
  if (x > 0) {
    isPositive = true;
  } else {
    isPositive = false;
    x = -x
  }
  let result = 0
  while (true) {
    let yu = x % 10;
    let ji = Math.floor(x / 10);
    x = ji

    result = result * 10 + yu;
    if (result > Math.pow(2, 31) -1 || result < -Math.pow(2, 31)) {
      result = 0;
      break;
    }

    if (ji === 0) {
      break;
    }
  }

  return result * (isPositive ? 1 : -1);
}

console.log(reverse(-12))