/**
 * Product except itself
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = function(nums) {
  let totalProduct = nums.reduce((p,c) => p * c);
  let zeroIndices = [];
  if(totalProduct === 0) {
    zeroIndices = nums.map((x, i) => x === 0 ? i : null).filter((x) => x !== null);
    if(zeroIndices.length > 1) {
      return Array.from({length: nums.length}, (x) => 0);
    }
    else if(zeroIndices.length === 1) {
      const totalProductNoZeros = nums.filter((x) => x !== 0).reduce((p, c) => p * c);
      return Array.from({length: nums.length}, (x, i) => zeroIndices[0] === i ? totalProductNoZeros : 0);
    }
  }
  return nums.map((x) => totalProduct / x);
}

const nums = [2, 3, 4, 5];
console.log(productExceptSelf(nums));

console.log("******************************************");

const productExceptSelfNoDivOperator = function(nums) {
  if(nums.length === 1) {
    return [0];
  }

  const leftArr = Array.from({ length: nums.length });
  const rightArr = Array.from({ length: nums.length });
  const product = Array.from({ length: nums.length });

  leftArr[0] = 1;
  rightArr[nums.length - 1] = 1;

  for(let i = 1; i < nums.length; i++) {
    leftArr[i] = leftArr[i - 1] * nums[i - 1];
  }

  console.log(leftArr);

  for(let j = nums.length - 2; j >= 0; j--) {
    rightArr[j] = rightArr[j + 1] * nums[j + 1];
  }

  console.log(rightArr);

  for(let k = 0; k < nums.length; k++) {
    product[k] = leftArr[k] * rightArr[k];
  }

  return product;
}

console.log(productExceptSelfNoDivOperator(nums));

