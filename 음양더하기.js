//음양 더하기

//내 풀이
function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

// //다른 사람 풀이

// //1)
// function solution(absolutes, signs) {

//   return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }
// //삼항 연산자를 이용

// //2)
// function solution(absolutes, signs) {
//   let answer = 0;
//   for (let i = 0; i < absolutes.length; i++) {
//       signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
//   }
//   return answer;
// }

// //3)
// function solution(absolutes, signs) {
//   let answer = 0;
//   absolutes.forEach((v, i) => {
//       if (signs[i]) {
//           answer += v;
//       } else {
//           answer -= v;
//       }
//   })
//   return answer;
// }
// //나랑 비슷한데 for문 대신 forEach를 써서 좀더 간단하게 한듯

// //4)
// var solution = (absolutes, signs) => absolutes.reduce((acc, x, i) => acc + (x * (signs[i] ? 1 : -1)), 0);

// //1번 풀이와 비슷하지만 제일 앞 function까지 화살표 함수로 바꿔서 한줄로 만듦

// //5)
// function solution(absolutes, signs) {
//   let answer = 0;
//   // 두 배열 길이 같음
//   for (let i = 0; i < absolutes.length; i++) {
//       // 부호에 따라 +-
//       signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
//   }
//   return answer;
// }
// //내 풀이에서 if문을 삼항 연산자로 더 짧게 바꿈
