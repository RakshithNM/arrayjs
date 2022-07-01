/* Kth largest number in a stream, the add method should add the input to the stream and return the kth largest element
* [1, 2, 3, 4, 5, 6, 7, 8, 9] for k=3 => 7
* [1, 2, 3, 4, 5, 6, 7, 8, 9] for k=5 => 5
*/

const arr = [4, 1, 3, 12, 7, 14];
const currentK = 3;

class KthLargestNumberInStream {
  constructor(inArray, inK) {
    this.stream = inArray;
    this.k = inK;
  }

  add(inNum) {
    this.stream.push(inNum);
    let sorted = this.stream.sort((a, d) => d - a);
    return sorted[--this.k];
  }
}

let kthLargestNumberInStreamInstance = new KthLargestNumberInStream(arr, 3);
console.log(kthLargestNumberInStreamInstance.add(15));
