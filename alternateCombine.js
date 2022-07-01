/* Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const alternateList = (inList1, inList2) => {
  let currentList = 1;
  let finalList = [];
  for(let i = 0; i < inList1.length;) {
    if(currentList === 1) {
      finalList.push(inList1[i]);
    }
    else {
      finalList.push(inList2[i]);
      i++;
    }
    currentList = currentList === 1 ? 2 : 1;
  }
  return finalList;
}

console.log(alternateList([1, 2, 3, 4], ["a", "b", "c", "d"]));
