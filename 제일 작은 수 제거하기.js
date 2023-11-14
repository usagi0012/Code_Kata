function solution(arr) {
  if (arr.length === 1) return [-1];
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}

// function solution(arr) {
//   const min = Math.min(...arr);
//   return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
// }
