function dis(i){
    var cnt = 0 
    for(let j = 1; j < i + 1; j++){
        if(i%j === 0){
            cnt += 1
        }
    }
    return cnt
}

function solution(left, right) {
    var answer = 0
    var even = []
    var odd = []
    var cnt = 0
    
    for(let i = left; i < right + 1; i++){
        cnt = dis(i)
        if(cnt%2 === 0){
            even.push(i)
        } else{
            odd.push(i)
        }
    }
    
    var even_sum = even.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    
    var odd_sum = odd.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    
    answer = even_sum - odd_sum
    return answer
}