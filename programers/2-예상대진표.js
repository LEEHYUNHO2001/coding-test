function solution(n,a,b)
{
    let answer = 0;
    
    while(true){
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        answer += 1
        if(a === b){
            break
        }
    }
    return answer;
}