class ParenthesesString {
  constructor(str, openCount, closeCount) {
    this.str = str;
    this.openCount = openCount;
    this.closeCount = closeCount;
  }
}

const generateValidParentheses = (num) => {
  const results = [];
  const queue = [];
  queue.push(new ParenthesesString('', 0, 0));

  while (queue.length > 0) {
    const currentStr = queue.shift();
    if (currentStr.openCount === num && currentStr.closeCount === num) {
      results.push(currentStr.str);
    }

    if (currentStr.openCount < num) {
      queue.push(
        new ParenthesesString(
          currentStr.str + '(',
          currentStr.openCount + 1,
          currentStr.closeCount
        )
      );
    }

    if (currentStr.closeCount < currentStr.openCount) {
      queue.push(
        new ParenthesesString(
          currentStr.str + ')',
          currentStr.openCount,
          currentStr.closeCount + 1
        )
      );
    }
  }

  return results;
};

const generateValidParenthesesRecursive = (num) => {
  const result = [];
  let pArray = Array(2 * num);
  helper(num, 0, 0, pArray, 0, result);
  return result;
};

const helper = (num, openCount, closeCount, pArray, index, result) => {
  if (openCount === num && closeCount === num) {
    result.push(pArray.join(''));
  } else {
    if (openCount < num) {
      pArray[index] = '(';
      helper(num, openCount + 1, closeCount, pArray, index + 1, result);
    }
    if (closeCount < openCount) {
      pArray[index] = ')';
      helper(num, openCount, closeCount + 1, pArray, index + 1, result);
    }
  }
};

console.log(generateValidParentheses(2));
console.log(generateValidParentheses(3));

console.log(generateValidParenthesesRecursive(2));
console.log(generateValidParenthesesRecursive(3));
