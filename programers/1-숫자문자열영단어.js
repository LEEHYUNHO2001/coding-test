// 정규표현식 RegExp https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp
function solution(s) {
    var answer = 0;
    
    const word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < word.length ; i++){
        s = s.replace(new RegExp(`${word[i]}`, 'g'), i);
    }
    
    return parseInt(s);
}

//join은 합칠때, 구분할 문자열을 넣음
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//         console.log(arr, answer)
//     }

//     return Number(answer);