const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const splicedArray = array1.splice(0, 3);
console.log("spliced array", splicedArray);
console.log("array after splice", array1);

const slicedArray = array1.slice(0, 3);
console.log("sliced array", slicedArray);
console.log("array after slice", array1);
