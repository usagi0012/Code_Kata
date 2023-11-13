function solution(x) {
  var answer = true;
  var numX = String(x).split("").map(Number);
  var num = numX.reduce((a, c) => a + c);
  if (x % num !== 0) {
    answer = false;
  }
  return answer;
}

//function solution(x) {
//  let num = x;
//  let sum = 0;
//  do {
//    sum += x % 10;
//    x = Math.floor(x / 10);
//  } while (x > 0);
//
//  return !(num % sum);
//}
