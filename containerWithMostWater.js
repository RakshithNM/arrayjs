/* Container With Most Water
 *
 * @param {number[]} height
 * @return {number}
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
*/

const maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let area = (right - 0) * Math.min(height[0], height[right]);
  while(left < right) {
      let runningArea = (right - left) * Math.min(height[left], height[right]);
      if(height[left] > height[right]) {
          right--;
      }
      else {
          left++;
      }
      area = Math.max(area, runningArea);
  }
  return area;
};

const height = [2, 3, 4, 5, 18, 17, 6];
//const height = [2, 3, 10, 5, 7, 8, 9];

console.log(maxArea(height));

