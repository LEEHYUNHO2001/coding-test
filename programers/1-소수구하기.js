function isPrime(num) {
    for(let i=2; i<num; i++){
        if(num%i===0) return false
    }
    return true
}

function solution(nums) {
    var answer = []
    
    const dfs = (nums, num, sum) => {
        if(num === 3){
            answer.push(sum)      
        } else{
            for(let i = 0; i < nums.length; i++){
                dfs(nums.slice(i+1), num+1, sum+nums[i])
            }
        }
    }
    dfs(nums, 0, 0)
    answer = answer.filter(num=>isPrime(num))
    
    return answer.length;
}