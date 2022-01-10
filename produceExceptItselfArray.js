/* Create a new array with the product of all values at other indices than the current one
 * For sample array [1, 2, 3, 4, 5] the output shoudl be
 * [ 2 * 3 * 4 * 5,
 *  1 * 3 * 4 * 5,
 *  1 * 2 * 4 * 5, = [120, 60, 40, 30, 24]
 *  1 * 2 * 3 * 5
 *  1 * 2 * 3 * 4
 * ]
 */

const myArray = [1, 2, 3, 4, 5];

const output = myArray.map((inItem, inIndex, inArray) => {
  let otherMult = 1;
  for(let i in inArray) {
    if (i != inIndex) {
      otherMult *= inArray[i]
    }
  }
  return otherMult;
});

console.log('output', output);
