/*
 * Recursive summing of an array of number
*/

const recursiveSum = (inArr, inSum, inIndex) => {
  if(inIndex === inArr.length) {
    return inSum;
  }
  inSum += inArr[inIndex];
  return recursiveSum(inArr, inSum, inIndex + 1);
}

console.log(recursiveSum([1, 2, 3, 4, 5], 0, 0));
