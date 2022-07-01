/*
 * Given an array of numbers, return the indices of two numbers whose sum is the given target
 * Return -1 if no numbers lead to sum of target
*/

var twoSum = function(nums, target) {
  const m = new Map();
  for(const i in nums) {
    if(m.has(target - nums[i])) {
      return [m.get(target - nums[i]), i].map(Number);
    }
    m.set(nums[i], i);
  }
};

console.log(twoSum([3, 4, 2], 6));
