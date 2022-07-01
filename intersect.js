/*
 * Given 2 sorted array of integers, find the elements that exist in both arrays.
 * The arrays might have duplicate numbers.
 * The order of returning result doesn't matter.
*/

const intersect = (arr1, arr2) => {
  return arr1.filter((item, index) => {
    const indexOfItemarr2 = arr2.findIndex((elem) => elem === item);
    if(indexOfItemarr2 !== -1) {
      arr2.splice(indexOfItemarr2, 1);
      return true;
    }
    else {
      return false;
    }
  });
}

console.log(intersect(
  [1,2,2,3,4,4],
  [2,2,4,5,5,6,2000]
));

/*
 * Build on above problem but remove duplicates
*/

const arr1 = [1, 2, 2, 3, 4, 4];
const arr2 = [2, 2, 4, 5, 5, 6, 2000];

const intersection = (arr1, arr2) => {
  const setArr1 = new Set(arr1);
  const setArr2 = new Set(arr2);
  return [...setArr2].filter((item) => setArr1.has(item) === true);
}

console.log(intersection(arr1, arr2));
