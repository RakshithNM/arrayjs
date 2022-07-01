/*
 * Check if two words are anagrams
*/

const isAnagram = (s, t) => {
  if(s.length !== t.length) {
    return false;
  }
  const arr1 = Array.from({length: 26}, (x) => 0);
  const arr2 = Array.from({length: 26}, (x) => 0);

  for(let i = 0; i < s.length; i++) {
    arr1[s[i].charCodeAt(0) - 97] += 1;
    arr2[t[i].charCodeAt(0) - 97] += 1;
  }

  return arr1.every((value, index) => value === arr2[index]);
}

console.log(isAnagram("anagram", "nagrama"));
