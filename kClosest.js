/*
 * Find the k closest elements to x
 * A. Input: arr = [1,2,3,4,5], k = 4, x = 3 => Output: [1,2,3,4]
 * B. Input: arr = [2, 4, 5, 6, 9], k = 3, x = 6 => Output: [4, 5, 6]
*/

const kClosest = (inArray, inK, inX) => {
  const indexOfX = inArray.findIndex((x) => x === inX);
  let leftIndex = indexOfX - 1;
  let rightIndex = indexOfX;
  let noOfElements = inK;
  const closest = (inX, inY, inGoal) => Math.abs(inX - inGoal) <= Math.abs(inY - inGoal) ? -1 : 1;
  while(noOfElements > 0) {
    let close = closest(inArray[leftIndex], inArray[rightIndex], inX);
    if(close === -1) {
      leftIndex += close;
    }
    else if(close === 1) {
      rightIndex += close;
    }
    --noOfElements;
  }
  leftIndex = leftIndex < 0 ? 0 : leftIndex;
  rightIndex = rightIndex > inK ? inK : rightIndex;
  return inArray.splice(leftIndex, rightIndex);
}

const arr = [1, 2, 3, 4, 5];
const k = 4;
const x = 4;

console.log(kClosest(arr, k, x));
