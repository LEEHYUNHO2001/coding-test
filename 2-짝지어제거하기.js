function solution(s)
{
    let stack = []
    
    for(let i = 0; i < s.length; i++){
        if(!stack || stack[stack.length - 1] != s[i]){
            stack.push(s[i])
        } else{
            stack.pop()
        }
    }
    
    return stack.length === 0 ? 1:0
}

/*
//시간초과
function solution(s)
{
    let answer = 0;
    let arr = s.split('')
    
    for(let i = 0; i < arr.length - 1;){
        if(arr[i] === arr[i+1]){
            arr.splice(i, 2)
            i -= 1
        } else{
            i++
        }
    }
    console.log(arr.length)
    if(arr.length === 0){
        answer = 1
    }
    return answer;
}
*/