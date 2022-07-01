/* Write a function that checks whether an element occurs in a list. */

const isInList = (inList, inItem) => {
  return inList.some((e) => e === inItem);
}

console.log(isInList([10, 20, 30, 40, 50, 60, 70], 55));
console.log(isInList([10, 20, 30, 40, 50, 60, 70], 50));
