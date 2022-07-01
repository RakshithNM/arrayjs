/* Write three functions that compute the sum of the numbers in a list: using a for-loop, a while-loop and recursion. (Subject to availability of these constructs in your language of choice.) */

const sumFor = (inList) => {
  let sum = 0;
  for(let i = 0; i <= inList.length - 1; i++) {
    sum += inList[i];
  }
  return sum;
}

const sumWhile = (inList) => {
  let i = 0;
  let sum = 0;
  while(i <= inList.length - 1) {
    sum += inList[i];
    i++;
  }
  return sum;
}

const sumRecursion = (inList) => {
  let sum = 0;
  if(inList.length === 1) {
    return inList[0];
  }
  sum = inList[0] + sumRecursion(inList.splice(1, inList.length - 1));
  return sum;
}

console.log(sumFor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumWhile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
