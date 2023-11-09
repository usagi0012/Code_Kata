function solution(num1, num2) {
  var answer = (num1 - (num1 % num2)) / num2;
  return answer;
}

//const solution = (num1, num2) => Math.floor(num1 / num2)

// function solution(num1, num2) {
//   return Math.trunc(num1 / num2);
// }

// function solution(num1, num2) {
//   return parseInt(num1 / num2);
// }

// function solution(num1, num2) {
//   return ~~(num1/num2);
// }
