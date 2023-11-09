function solution(numbers) {
  var answer =
    numbers.reduce((acc, cur) => {
      return acc + cur;
    }) / numbers.length;
  return answer;
}
