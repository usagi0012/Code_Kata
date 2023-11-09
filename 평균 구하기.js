function solution(arr) {
  var answer =
    arr.reduce((acc, cur) => {
      return acc + cur;
    }) / arr.length;
  return answer;
}
