function solution(myStr) {
  const answer = myStr.split(/[abc]/).filter(Boolean);
  return answer.length > 0 ? answer : ["EMPTY"];
}

// 재귀 (모수가 너무 많아 런타임 에러)
// function solution(myStr) {
//     const myArr = myStr.split("");
//     const myArrLength = myArr.length;
//     let answer = [];

//     function splitString(index = 0, str = "") {
//         if (index >= myArrLength) {
//             if (str !== "") answer.push(str);
//             return;
//         }

//         const char = myArr[index];

//         if (isSeparator(char)) {
//             if(str !== "") answer.push(str);
//             splitString(index + 1, "");
//         } else {
//             splitString(index + 1, str + char);
//         }
//     }

//     splitString();
//     answer = answer.filter((item) => item !== "")

//     return answer.length > 0 ? answer : ["EMPTY"];
// }

// function isSeparator(char) {
//     return ["a", "b", "c"].includes(char);
// }
