function solution(a, b) {
  var answer = 0;
  if (a < b) {
    for (a; a <= b; a++) {
      answer += a;
    }
  } else {
    for (b; b <= a; b++) {
      answer += b;
    }
  }
  return answer;
}

// function adder(a, b) {
//   var result = 0;
//   //함수를 완성하세요
//   return ((a + b) * (Math.abs(a - b) + 1)) / 2;
// }

// function adder(a, b, s = 0) {
//   for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
//   return s;
// }
