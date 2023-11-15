function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
}

// function solution(a, b) {
//   return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }
//인자에 _를 넣는 것은 사용하지 않는 인자일 때 넣는거라고 한다! 항상 궁금했는데 알게 되어서 굿굿

// function solution(a, b) {
//   var sum = 0;
//   for(var i=0; i<a.length; i++){
//       sum += a[i]*b[i];
//   }
//   return sum;
// }
