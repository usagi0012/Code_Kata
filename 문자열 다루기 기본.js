function solution(s) {
  var answer = false;
  if (s.length === 4 || s.length === 6) {
    answer = s.match(/\D/) ? false : true;
  }
  return answer;
}

// function alpha_string46(s){
//     var regex = /^\d{6}$|^\d{4}$/;

//   return regex.test(s);
// }
//정규식 나도 잘쓰고 싶다!
