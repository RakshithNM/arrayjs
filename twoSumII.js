/**
 * Two Sum II - Input Array Is Sorted
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 *
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
 */

const twoSumSlow = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while(start < end) {
    if(target - numbers[end] === numbers[start]) {
      return [start + 1, end + 1];
    }
    else {
      end--;
      if(end === start) {
        end = numbers.length - 1;
        start = start + 1;
      }
    }
  }
};

//const num = [2, 3, 4];
const num = [2, 4, 5, 6, 7, 8];
const sum = 6;

console.log(twoSumSlow(num, sum));

const twoSumBin = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while(start < end) {
    if(numbers[start] + numbers[end] === target) {
      return [start, end];
    }
    else if(numbers[start] + numbers[end] > target) {
      end--;
    }
    else {
      start++;
    }
  }
  return [start, end];
};

console.log(twoSumBin(num, sum));


