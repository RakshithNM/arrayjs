/* Write a function that returns the elements on odd positions in a list. */

const oddItems = (inList) => {
  return inList.filter((e, i) => i % 2 === 0);
}

console.log(oddItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
