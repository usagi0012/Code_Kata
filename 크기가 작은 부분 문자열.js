function solution(t, p) {
  var answer = 0;
  var strings = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    strings.push(t.substr(i, p.length));
  }
  strings.forEach((e) => {
    answer += Number(e) <= Number(p) ? 1 : 0;
  });
  return answer;
}

// function solution(t, p) {
//   let count = 0;
//   for(let i=0; i<=t.length-p.length; i++) {
//       let value = t.slice(i, i+p.length);
//       if(+p >= +value) count++;
//   }
//   return count;
// }
//배열을 만들지 않고 첫번째 for문안에서 다 해결했어도 됐었구나!
