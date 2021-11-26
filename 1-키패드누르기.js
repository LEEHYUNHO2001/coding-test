function solution(numbers, hand) {
    const keypad = {
        1:[0,1], 2:[1,1], 3:[2,1],
        4:[0,2], 5:[1,2], 6:[2,2],
        7:[0,3], 8:[1,3], 9:[2,3],
        '*':[0,4], 0:[1,4], '#':[2,4]
    };
    let answer = '';
    let lp = '*';
    let rp = '#';
    const h = hand === 'left' ? 'L' : 'R';
    
    for(let i=0; i < numbers.length; i++){
        if([1,4,7].includes(numbers[i])){
            answer += 'L';
            lp = numbers[i];
        } else if([3,6,9].includes(numbers[i])){
            answer += 'R';
            rp = numbers[i];
        } else{
            var left = Math.abs(keypad[numbers[i]][0] - keypad[lp][0]) + 
                Math.abs(keypad[numbers[i]][1] - keypad[lp][1]);
            var right = Math.abs(keypad[numbers[i]][0] - keypad[rp][0]) + 
                Math.abs(keypad[numbers[i]][1] - keypad[rp][1]);
            if(left === right){
                answer += h;
            } else if(left < right){
                answer += 'L';
            } else{
                answer += 'R';
            }
            answer[answer.length -1] === 'L' ? lp = numbers[i] : rp = numbers[i]; 
        }
    }
    return answer;
}