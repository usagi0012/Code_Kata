function solution(n) {
  var x = Math.floor(Math.sqrt(n));
  return x ** 2 === n ? (x + 1) ** 2 : -1;
}

// function solution(n) {
//   // 내장함수
//   let sqr = Math.sqrt(n);
//   return sqr%1 ? -1 : (sqr+1)**2;
// }

// function solution(n) {
//   var answer = 0;

//   for(let i=0, a=0; i<=n; i++){
//     if(n/i===i){
//       a = i + 1
//       return a*a
//     } else {
//       answer = -1
//     }
//   }

//   return answer;
// }

// function nextSqaure(n){
//   var result = 0;
//    var x = 0;
//    while ( x*x < n)
//    {
//      x++;
//    }
//    if (x*x == n)
//    {
//      x++;
//      result = x*x;
//    }else{
//      result = -1;
//    }
//    return result;

//  }
