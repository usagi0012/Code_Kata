function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? "수" : "박";
  }
  return answer;
}

//repeat이용해서 먼저 써놓고 홀수면 수 하나 더 붙여준다
// var waterMelon = n =>'수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
