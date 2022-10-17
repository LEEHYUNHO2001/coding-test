function solution(n) {
    let answer = 0;
    let currentNum = 0;
    let startNum = 1;
    let num = 1;
    
    while(startNum <= n){
        currentNum += num;
        
        if(currentNum >= n){
            if(currentNum === n) answer += 1;
            currentNum = 0;
            startNum += 1;
            num = startNum;
        } else{
            num += 1;
        }
    }
    
    return answer;
}