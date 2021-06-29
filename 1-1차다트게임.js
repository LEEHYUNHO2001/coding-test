function solution(dartResult) {
    var answer = []
    var sp = dartResult.split('');
    var exp = 0
    var str = ''
    
    for(let i = 0; i < sp.length; i++){
        if(sp[i] === 'S'){
            exp = 1
            answer.push(parseInt(str) ** exp)
            str = ''
        } else if(sp[i] === 'D'){
            exp = 2
            answer.push(parseInt(str) ** exp)
            str = ''
        } else if(sp[i] === 'T'){
            exp = 3
            answer.push(parseInt(str) ** exp)
            str = ''
        } else if(sp[i] === '*'){
            if(answer.length > 1){
                answer[answer.length - 2] = answer[answer.length - 2] * 2
                answer[answer.length - 1] = answer[answer.length - 1] * 2
            } else{
                answer[answer.length - 1] = answer[answer.length - 1] * 2
            }
        } else if(sp[i] === '#'){
            answer[answer.length - 1] = answer[answer.length - 1] * (-1)
        } else{
            str += String(sp[i])
        }
    }
    answer = answer.reduce((sum, currValue) => {
        return sum + currValue
    }, 0)
    return answer;
}