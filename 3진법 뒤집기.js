function solution(n) {
  var reverseN = [...n.toString(3)].reverse().join("");
  return parseInt(reverseN, 3);
}
