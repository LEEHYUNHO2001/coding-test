function solution(lottos, win_nums) {
    var answer = [];
    
    const good = lottos.filter(v => win_nums.includes(v)).length
    const zero = lottos.filter(v => v === 0).length
    
    var luck = good + zero
    
    var min = 7-good >= 6 ? 6 : 7-good;
    var max = good+zero === 0 ? 6 : 7-(good+zero)
    
    answer.push(max, min)
    
    return answer;
}


// function solution(lottos, win_nums) {
//     var answer = [];
//     var min = 0;
//     var max = 0;
    
//     for(var i = 0; i < 6; i++){
//         if(win_nums.includes(lottos[i])){
//             min += 1;
//         } else if(lottos[i] === 0){
//             max += 1;
//         }
//     }
//     max = max + min;
    
//     if(min === 0 && max === 6){
//         answer.push(1, 6);
//     } else if(min === 0 && max === 0){
//         answer.push(6,6)
//     }else if(min === 6){
//         answer.push(1, 1)
//     } else{
//         answer.push(7-max, 7-min)
//     }
    
//     return answer;
// }