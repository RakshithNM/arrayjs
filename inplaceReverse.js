/* Write function that reverses a list, preferably in place. */

const reverseList = (inList) => {
  let i = 0;
  let j = inList.length - 1;
  let mid = (inList.length - i) / 2;
  let temp = null;
  while(i <= mid) {
    temp = inList[i];
    inList[i] = inList[j];
    inList[j] = temp;
    i++;
    j--;
  }
  return inList;
}

console.log(reverseList([1, 2, 3, 4, 5]));
