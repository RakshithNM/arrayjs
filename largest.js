/* Write a function that returns the largest element in a list. */

const largest = (inList) => {
  return Math.max.apply(null, inList);
}

console.log(largest([1, 2, 3, 4, 5, 6, 7, 8, 9]));
