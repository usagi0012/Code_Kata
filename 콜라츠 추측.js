function solution(num) {
  var answer = 0;
  for (let i = 0; i <= 500; i++) {
    if (num === 1) {
      answer = i;
      break;
    }

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return num === 1 ? answer : -1;
}

// function collatz(num) {
//   var answer = 0;
//   while (num != 1 && answer != 500) {
//     num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
//     answer++;
//   }
//   return num == 1 ? answer : -1;
// }

// function solution(num) {
//   let counter = 0;
//   while (num !== 1) {
//     if (counter++ === 500) return -1;
//     num = num % 2 ? num * 3 + 1 : num / 2;
//   }
//   return counter;
// }
