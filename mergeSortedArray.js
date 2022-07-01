/* Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.*/

const mergeSorted = (inList1, inList2) => {
  const m = {};
  const merged = [];
  for(let s of inList1) {
    m[s] = true;
  }

 for(let q of inList2) {
    m[q] = true;
  }

  for(let [key, value] of Object.entries(m)) {
    merged.push(Number(key));
  }

  return merged;
}

console.log(mergeSorted([1, 6], [2, 3, 5]));
