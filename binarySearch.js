/* Binary search */

const binarySearchIterative = (inArray, inX) => {
  let startIndex = 0;
  let endIndex = inArray.length - 1;

  while(startIndex < endIndex) {
    const mid = startIndex + Math.round((endIndex - startIndex) / 2);
    if(inArray[mid] === inX) {
      return true;
    }
    else if(inArray[mid] < inX) {
      startIndex = mid + 1;
    }
    else if(inArray[mid] > inX) {
      endIndex = mid - 1;
    }
  }
  return false;
}

const arrIt = [1, 2, 3, 5, 6, 7];
const xIt = 5;

console.log(binarySearchIterative(arrIt, xIt));

const binarySearchRecursive = (inArray, inX, startIndex = 0, endIndex = inArray.length - 1) => {
  if(startIndex > endIndex) {
    return false;
  }

  const mid = startIndex + Math.round((endIndex - startIndex) / 2);

  if(inArray[mid] === inX) {
    return true;
  }

  if(inArray[mid] < inX) {
    return binarySearchRecursive(inArray, inX, mid + 1, endIndex);
  }
  else {
    return binarySearchRecursive(inArray, inX, startIndex, mid - 1);
  }
}

const arrRe = [1, 2, 3, 4, 5, 6, 7];
const xRe = 5;

console.log(binarySearchRecursive(arrRe, xRe, 0, arrRe.length - 1));
