/*
 * Move all the zeros to the end of the array
*/

const list = [0, 1, 10, 0, 0, 0, 1, 2, 6];

const moveZeros = (list) => {
  const numZeros = list.filter((item) => item === 0).length;
  let first = 0;
  let last = 1;
  let numSwaps = 0;
  while(first <= list.length - 1 && last <= list.length - 1) {
    if(list[first] === 0) {
      if(list[last] === 0) {
        last++;
      }
      else {
        const temp = list[last];
        list[last] = list[first];
        list[first] = temp;
        if(numSwaps >= numZeros) {
          break;
        }
        numSwaps++;
        first++;
        last = first + 1;
      }
    }
    else {
      first++;
      last++;
    }
  }
}

moveZeros(list)

console.log(list);
