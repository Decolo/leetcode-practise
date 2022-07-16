var isValid = function (s) {
  const map = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  if (
    s.length % 2 !== 0 ||
    s.charAt(0) === ")" ||
    s.charAt(0) === "}" ||
    s.charAt(0) === "]"
  )
    return false;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const element = s.charAt(i);

    if (map[element]) {
      stack.push(map[element]);
    } else if (element === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return !stack.length;
};

console.log(isValid("([}}])"));
