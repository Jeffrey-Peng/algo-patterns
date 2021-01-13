const fruitsBaskets = (arr) => {
  let maxFruits = 0;
  let start = 0;
  let baskets = {};

  for (let end = 0; end < arr.length; end++) {
    let currentFruit = arr[end];

    if (!baskets[currentFruit]) baskets[currentFruit] = 0;
    baskets[currentFruit]++;

    while (Object.keys(baskets).length > 2) {
      let startingFruit = arr[start];

      baskets[startingFruit]--;
      if (!baskets[startingFruit]) delete baskets[startingFruit];

      start++;
    }

    maxFruits = Math.max(maxFruits, end - start + 1);
  }
  return maxFruits;
};

console.log(fruitsBaskets(['A', 'B', 'C', 'A', 'C']));
console.log(fruitsBaskets(['A', 'B', 'C', 'B', 'B', 'C']));
