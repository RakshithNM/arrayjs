/*
 * Does the array contain duplicate?
*/

const containsDuplicate = (inArray) => {
  const containsSet = new Set();
  for(const item of inArray) {
    if(containsSet.has(item)) {
      return true;
    }
    containsSet.add(item);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5]));
