const evaluateExpression = (input) => {
  return evaluateExpressionHelper(input, {});
};

const evaluateExpressionHelper = (input, map) => {
  if (input in map) {
    return map[input];
  }

  const result = [];

  if (!input.match(/[+\-*]/)) {
    result.push(parseInt(input, 10));
  } else {
    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (isNaN(parseInt(char, 10))) {
        const leftSide = evaluateExpression(input.substring(0, i));
        const rightSide = evaluateExpression(input.substring(i + 1));

        for (let l = 0; l < leftSide.length; l++) {
          for (let r = 0; r < rightSide.length; r++) {
            let part1 = leftSide[l];
            let part2 = rightSide[r];
            if (char === '+') {
              result.push(part1 + part2);
            } else if (char === '-') {
              result.push(part1 - part2);
            } else if (char === '*') {
              result.push(part1 * part2);
            }
          }
        }
      }
    }
  }
  map[input] = result;
  return result;
};

console.log(evaluateExpression('1+2*3'));
console.log(evaluateExpression('2*3-4-5'));
