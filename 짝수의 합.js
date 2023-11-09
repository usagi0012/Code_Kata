function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}

// function solution(n) {
//   var half = Math.floor(n/2);
//   return half*(half+1);
// }
//수열 공식을 이요한 것이라고 하는데 나는 뭔지 몰라 그게

// function solution(n) {
//   var answer = 0;

//   for(let i=2 ; i<=n ; i+=2)
//       answer += i;

//   return answer;
// }
//if문을 안쓰고 i에 2씩 더해주는 방법도 있다.
