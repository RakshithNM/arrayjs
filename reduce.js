/* Write a function that computes the running total of a list. */

const runningTotal = (inList) => {
  return inList.reduce((prev, curr) => prev + curr);
}

console.log(runningTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
