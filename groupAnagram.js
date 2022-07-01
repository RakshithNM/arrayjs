/**
 * Group array of words into anagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 *
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

var groupAnagrams = function(strs) {
  const hashMap = {};
  for(let str of strs) {
    const splitSorted = str.split("").sort();
    hashMap[splitSorted] ? hashMap[splitSorted].push(str) : hashMap[splitSorted] = [str];
  }

  const groupedAnagrams = Object.values(hashMap);
  return groupedAnagrams;
};

const strs = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs));
