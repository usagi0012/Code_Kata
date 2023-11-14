function solution(phone_number) {
  var star = phone_number.slice(0, -4);
  var num = phone_number.slice(-4);
  return star.replaceAll(/\d/g, "*") + num;
}

// function hide_numbers(s){
//   var result = "*".repeat(s.length - 4) + s.slice(-4);
//   return result;
// }

// const solution = n => [...n].fill("*",0,n.length-4).join("")

// function hide_numbers(s){
//   var result = "";
//   //함수를 완성해주세요

//  for(var i=0; i<s.length; i++){
//    result += i < s.length-4 ? "*":s.charAt(i);
//  }

//   return result;
// }
