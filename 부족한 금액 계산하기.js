function solution(price, money, count) {
  var needMoney = 0;
  for (var i = 1; i <= count; i++) {
    needMoney += price * i;
  }
  var answer = money - needMoney;
  return answer <= 0 ? Math.abs(answer) : 0;
}

// function solution(price, money, count) {
//   const tmp = (price * count * (count + 1)) / 2 - money;
//   return tmp > 0 ? tmp : 0;
// }

// 1 ~ n까지의 합 n * (n + 1) / 2인데 여기에 price배 만큼 곱해주는 거니까 (앞의 식) * price으로 필요한 돈을 쉽게 구함

// function solution(price, money, count) {
//   let answer = 0;

//   for (let i = 1; i <= count; i++) {
//       answer += price * i;
//   }

//   return answer > money ? answer - money : 0;
// }
//Math.abs 굳이 안쓰고 이런식으로 비교해서 결과값 반환했어도 좋았을 듯!
