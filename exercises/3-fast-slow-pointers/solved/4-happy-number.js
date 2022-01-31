const isHappyNumber = (num) => {
  let slow = num;
  let fast = num;

  while (happyCalc(fast) !== 1) {
    slow = happyCalc(slow);
    fast = happyCalc(happyCalc(fast));

    if (slow === fast) return false;
  }

  return true;
};

const happyCalc = (num) => {
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;
    sum += Math.pow(digit, 2);
    num = (num - digit) / 10;
  }

  return sum;
};

console.log(isHappyNumber(23));
console.log(isHappyNumber(12));
