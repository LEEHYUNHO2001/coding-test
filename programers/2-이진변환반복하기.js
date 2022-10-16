function solution(s) {
    let answer = [0, 0];
    let str = s;
    
    while(str !== '1'){
        const oneBinary = str.split('0').join('');
        answer[1] = answer[1] + Math.abs(oneBinary.length - str.length);
        answer[0] = answer[0] + 1;
        str = oneBinary.length.toString(2); 
    }
    
    return answer;
}