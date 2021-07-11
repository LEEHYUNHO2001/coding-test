function solution(brown, yellow) {
    var answer = [];
    var w = 0
    var h = 0
    
    for(let i = yellow; i >= 1; i--){
        if(yellow % i === 0){
            w = i
            h = yellow / i
        }
        if( brown === w * 2 + h * 2 + 4 ){
            answer = [w+2, h+2]
            break
        }
    }
    
    
    return answer;
}