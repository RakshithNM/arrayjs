/* Flatten an array of any depth */
const myArray = [1, 2, 3, [1, 2, 3, [4, [1, 2, 3, [4, 5, 6]]]]];
let flattendArray = [];

const flattenArr = (inArray) => {
  inArray.forEach((item) => {
    Array.isArray(item) ? flattenArr(item) : flattendArray.push(item);
  });
  return flattendArray;
}

console.log(flattenArr(myArray));
