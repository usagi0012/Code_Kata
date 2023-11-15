function solution(left, right) {
  var answer = 0;
  for (var i = left; i <= right; i++) {
    var divisor = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisor += 1;
      }
    }
    console.log(divisor);
    answer += divisor % 2 === 0 ? i : -i;
  }
  return answer;
}

// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//       if (Number.isInteger(Math.sqrt(i))) {
//           answer -= i;
//       } else {
//           answer += i;
//       }
//   }
//   return answer;
// }
//제곱근이 정수면 약수의 갯수가 홀수!
