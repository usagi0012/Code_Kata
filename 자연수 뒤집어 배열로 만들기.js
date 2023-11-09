function solution(n) {
  var stringN = [...String(n)];
  var answer = stringN.map(Number).reverse();
  return answer;
}

// //수학적 풀이법

// function solution(n) {
//   // 문자풀이
//   // return (n+"").split("").reverse().map(v => parseInt(v));

//   // 숫자풀이
//   var arr = [];

//   do {
//       arr.push(n%10);
//       n = Math.floor(n/10);
//   } while (n>0);

//   return arr;
// }

// function solution(n) {
//   var answer = [];
//   n = n + "";
//   for (var i = n.length - 1; i >= 0; i--) {
//       answer.push(Number(n[i]));
//   }
//   return answer;
// }
