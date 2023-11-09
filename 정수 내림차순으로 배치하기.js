function solution(n) {
  var arr = [...String(n)].sort((a, b) => {
    return b - a;
  });
  return +arr.join("");
}

// function solution(n) {
//   const newN = n + "";
//   const newArr = newN
//     .split("")
//     .sort()
//     .reverse()
//     .join("");

//   return +newArr;
// }

// function solution(n) {
//   //숫자가 분명히 더 빠름
//   var nums =[];
//   do{
//       nums.push(n%10);
//       n=Math.floor(n/10);
//   } while(n>0)

//   return nums.sort((a,b)=>b-a).join('')*1;
// }
