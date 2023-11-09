function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

// function solution(num1, num2) {
//   return ((num1 == num2)-0.5)*2;
// }
//재밌는 풀이! true라면 (num1 == num2)에 1이 들어가서 (1 - 0.5)*2 => 1이 return되고, false라면 0이 들어가서 (0 - 0.5)*2 => -1이 return됨.
