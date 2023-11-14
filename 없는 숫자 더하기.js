function solution(numbers) {
  var num = [...new Array(10)].map((_, i) => i);
  var noNum = num.filter((e) => !numbers.includes(e));
  return noNum.reduce((a, b) => a + b);
}

// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
//전체 합,,, 지린다

// function solution(numbers) {
//   let answer = 0;

//   for(let i = 0; i <= 9; i++) {
//       if(!numbers.includes(i)) answer += i;
//   }

//   return answer;
// }
