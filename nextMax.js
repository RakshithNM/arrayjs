/* Given an array of numbers, create an array of numbers with next greater number for each number
 * If next greater number not present, push -1 to the array
 * const input = [4, 6, 3, 12, 9, 7];
 * const output = [6, 12, 12, -1, -1, -1];
*/

const nextMax = (inInput) => {
  const fetchNextMax = (inItem, inArray) => {
    return inArray.find((item) => item > inItem);
  };
  const output = inInput.map((item, index, array) => {
    const nextMax = fetchNextMax(item, array.slice(index + 1, array.length));
    return nextMax === undefined ? -1 : nextMax;
  });
  return output;
};

console.log(nextMax(input)); // [6, 12, 12, -1, -1, -1]
