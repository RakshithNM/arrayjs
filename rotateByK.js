/* Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list. How many swap or move operations do you need? */

const rotateByK = (inList, inK) => {
  let n = inList.length;
  let k = inK % n;
  let rotated = [];
  for(let i = 0; i < n; i++) {
    if(i < k) {
      rotated.push(inList[n + i - k]);
    }
    else {
      rotated.push(inList[i - k]);
    }
    console.log(rotated);
  }
  return rotated;
}

console.log(rotateByK([1, 2, 3, 4, 5, 6], 2));
