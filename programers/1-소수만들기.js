function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

function solution(nums) {
    var answer = [];
    
    const dfs = (nums, cnt, arr = []) => {
        if(cnt === 3) return answer.push(arr.reduce((a, c) => {return a + c}));
        for(let i = 0; i < nums.length; i++){
            arr.push(nums[i]);
            dfs(nums.slice(i+1), cnt + 1, arr);
            arr.pop()
        }

    }
    dfs(nums, 0);
    return answer.filter(v => isPrime(v)).length;
}