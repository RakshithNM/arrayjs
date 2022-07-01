/*
 * Longest consecutive sequence
 *
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 */

const longConsecutiveSeq = (inArray) => {
  let count = 0;
  let ans = 0;
  const sortedSet = [...new Set(inArray.sort((a, d) => a - d))];
  for(var i in sortedSet) {
    let index = Number(i);
    if(index > 0 && sortedSet[i] === sortedSet[i - 1] + 1) {
      count++;
    }
    else {
      count = 1;
    }
    ans = Math.max(ans, count);
  }
  return ans;
}

const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longConsecutiveSeq(nums));

const longConsecutiveSeqPerformant = (inArray) => {
  let count = 0;
  let ans = 0;
  const s = new Set();
  const sortedSet = [...new Set(inArray.sort((a, d) => a - d))];
  for(var num of sortedSet) {
    s.add(num);
  }
  for(var i in sortedSet) {
    if(!s.has(sortedSet[i] - 1)) {
      let j = sortedSet[i];
      while(s.has(j)) {
        j++
      }

      ans = Math.max(ans, j - sortedSet[i]);
    }
  }
  return ans;
}
