/* String segmentation
 *
 * You are given a dictionary of words and a large input string. You have to find out whether the input string can be completely segmented into the words of a given dictionary. The following two examples elaborate on the problem further.
 *
 * Input: s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word.
 */

const isInDictFunc = (inSubString, inDict) => {
  return inDict.includes(inSubString);
}

const segment = (inString) => {
  const length = inString.length;
  if(length <= 0) {
    return true;
  }
  const dict = ["apple", "pen"];
  for(let i in inString) {
    const index = (Number(i) === length - 1) ? Number(i) + 1: Number(i);
    const isInDict = isInDictFunc(inString.substr(0, index), dict);
    if(isInDict && segment(inString.substr(index))) {
      return true;
    }
  }
  return false;
}

const str = "applepenapple";

console.log(segment(str));
