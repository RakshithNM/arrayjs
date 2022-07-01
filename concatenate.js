/* Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3] */

const concatenates = (inList1, inList2) => {
  return inList1.concat(inList2);
}

console.log(concatenates([1, 2, 3], ["a", "b", "c"]));
