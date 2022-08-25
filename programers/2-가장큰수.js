function solution(numbers) {
    var answer = numbers.map(change => change.toString()).sort((next, pre) =>  {
        return (pre+next) - (next+pre)
    }).join('')
    return answer[0] === '0' ? '0' : answer;
}