function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}
//최대공약수
function gcd(a, b) {
  if (b === 0) return a;
  if (a > b) {
    return gcd(b, a % b);
  } else {
    return gcd(a, b % a);
  }
}

//최소공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

/*
최대공약수와 최소공배수 구하기
:두 개의 정수가 주어졌을 때, 이들의 최대공약수와 최소공배수를 찾는 함수를 작성하세요.
*/

/*
유클리드 호제법
a>b, a%b === r 일때, a&b의 초대공약수는 b와 r의 최대공약수와 나머지가 같다
b%r === r1
r%r1 === r2 (0이 될때까지 반복)
*/

// function gcdlcm(a, b) {
//   var r;
//   for(var ab= a*b;r = a % b;a = b, b = r){}
//   return [b, ab/b];
// }
//최대공약수 구하는 재귀함수를 for문으로 짧게 썼다.
