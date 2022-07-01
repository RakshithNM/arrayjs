/*
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g']) => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]
*/

const chunk = (inArray) => inArray.map(item => [item]);
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g']));


