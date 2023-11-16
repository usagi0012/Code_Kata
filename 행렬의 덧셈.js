function solution(arr1, arr2) {
  var answer = [...new Array(arr1.length)].map(() => []);
  arr1.forEach((e, idx) => {
    e.forEach((n, i) => {
      answer[idx].push(n + arr2[idx][i]);
    });
  });
  return answer;
}

// var answer = new Array(arr1.length).fill([]);
// [[4,6,7,9],[4,6,7,9]] 계속 이렇게 떴다. //[[4,6],[7,9]] 이렇게 떠야하는데!
//왜안되나 싶었는데 fill은 전달받은 것을 참조하여 복사해 배열을 채우기 때문에 같은 배열이 나오기 때문에 그랬던 것!

// function sumMatrix(A,B){
//   return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
// }
//원래 이것처럼 map 두번쓰고 싶었는데 잘 안되어가지고 포기했었다.

// function solution(arr1, arr2) {
//   var answer = [[]];
//   for (var i=0; i<arr1.length; i++){
//       answer[i] =[];
//       for(var j=0; j<arr1[i].length; j++){
//           answer[i].push(arr1[i][j] + arr2[i][j]);
//       }
//   }
//   return answer;
// }
//이중 for문 쓴사람도 있네
