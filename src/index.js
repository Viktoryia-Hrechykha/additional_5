module.exports = function check(str, bracketsConfig) {
  let stack = [];

  [...str].forEach((el) => {

    if (bracketsConfig.some((brackets) => brackets.indexOf(el) === 1
      && brackets.indexOf(stack[stack.length - 1]) === 0
      || brackets.indexOf(el) === 0 && el === brackets[1]
      && el === stack[stack.length - 1])) {
      stack.pop()
    } else {
      stack.push(el)
      }
  });

return !stack.length;

}

