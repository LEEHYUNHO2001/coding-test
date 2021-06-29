function solution(d, budget) {
    var cnt = 0
    d.sort((a, b) => {
        if(a >= b){
            return 1
        } else{
            return -1
        }
    })
    
    while (budget > 0){
        if(budget < d[cnt]){
            break
        }
        budget -= d[cnt]
        if(cnt === d.length){
            break
        }
        cnt += 1
        
    }
    return cnt;
}