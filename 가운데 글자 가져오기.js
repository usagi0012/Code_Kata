function solution(s) {
  var answer = "";
  var mid = Math.floor(s.length / 2);
  answer = s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
  return answer;
}

//substr()로 자를수 있었다!
// function solution(s) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }
