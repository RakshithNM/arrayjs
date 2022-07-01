// Given an unsorted array of integers which might have duplicates, return the top k integers in non-ascending order.

const topK = (inArray, inN) => {
  inArray.sort((a, d) => d - a);
  return inArray.slice(0, inN);
}

console.log(topK([1,10,8,9,10,2,3,4,8,8,6], 4));
// [10, 10, 9, 8]
