function solution(angle) {
  if (0 < angle && angle <= 90) {
    return angle !== 90 ? 1 : 2;
  } else if (90 < angle && angle <= 180) {
    return angle !== 180 ? 3 : 4;
  }
}
//&& 연산자를 사용해야 하는 줄 모르고 좀 헤맸다. if문 여러개 쓰기 귀찮아서 삼항연산자 넣음.

// function solution(angle) {
//   return [0, 90, 91, 180].filter(x => angle>=x).length;
// }
//신박해서 가져옴

// function solution(angle) {
//   switch(angle) {
//       case 90: return 2;
//       case 180: return 4;
//       default:
//           return angle > 0 && angle < 90 ? 1 : 3;
//   }
// }
//switch문 사용시.

// function solution(angle) {
//   return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
// }
//삼항연산자를 삼중으로 사용한건데 가독성은 좀 떨어지는 느낌?
