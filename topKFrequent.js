/* K frequent
 *
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 */

const topKFrequest = (nums, k) => {
  const hashMap = {};
  for(const num of nums) {
    hashMap[num] ? hashMap[num]++ : hashMap[num] = 1;
  };

  const topKFreq = [];
  let hashMapKeyValues = Object.entries(hashMap);
  hashMapKeyValues = hashMapKeyValues.sort((a, d) => d[1] - a[1]).filter((x, i) => i < k);
  return hashMapKeyValues.map((item) => Number(item[0]));
}

const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3];
const k = 2;

console.log(topKFrequest(nums, k));
