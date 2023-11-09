function solution(num) {
  var answer = "Even";
  if (num % 2 !== 0) {
    answer = "Odd";
  }
  return answer;
}

// //0은 false라는 걸 이용함. 삼항 연산자 사용
// function evenOrOdd(num) {
//   return num % 2 ? "Odd" : "Even"
// }

// //얘는 그냥 삼항연산자
// function evenOrOdd(num) {
//   return (num %2 == 0)? "Even":"Odd";
// }
