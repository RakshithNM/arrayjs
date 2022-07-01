/* Given an array, print the Next Greater Element (NGE) for every element.
 * The Next greater Element for an element x is the first greater element on the right side of x in the array.
 * Elements for which no greater element exist, consider the next greater element as -1. 
 * Examples:
 * - For an array, the rightmost element always has the next greater element as -1.
 * - For an array that is sorted in decreasing order, all elements have the next greater element as -1.
 * - For the input array [4, 5, 2, 25], the next greater elements for each element are as follows.
 * Element NGE
 * 4 --> 5
 * 5 --> 25
 * 2 --> 25
 * 25 --> -1
 * - d) For the input array [13, 7, 6, 12], the next greater elements for each element are as follows.
 * Element NGE
 * 13 --> -1
 * 7 --> 12
 * 6 --> 12
 * 12 --> -1
 */

const nge = (inNums) => {
  const ngeArr = [];
  for(let i = 0; i < inNums.length; i++) {
    let nextNge = -1;
    for(let j = i + 1; j < inNums.length; j++) {
      if(inNums[j] > inNums[i]) {
        nextNge = inNums[j];
        break;
      }
    }
    ngeArr.push(nextNge);
  }
  return ngeArr;
}

const nums = [4, 5, 2, 25];

console.log(nge(nums));
