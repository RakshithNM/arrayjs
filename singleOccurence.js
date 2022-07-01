// Given an array of integers, all integers appear twice except one integer, could you quickly target it ?

const arr = [10, 2, 2 , 1, 0, 0, 10]

const findSingle = (arr) => {
  const countObj = {};
  let i = 0;
  while(i < arr.length) {
    countObj[arr[i]] = ++countObj[arr[i]] || 1;
    i++;
  }

  for(let [key, value] of Object.entries(countObj)) {
    if(value === 1) {
      return Number(key);
    }
  }
}

console.log(findSingle(arr)) // 1
