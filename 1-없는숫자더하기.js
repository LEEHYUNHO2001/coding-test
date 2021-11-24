function solution(numbers) {
    var answer = -1;
    const reducer = (pre, cur) => pre + cur;
    var sum = numbers.reduce(reducer);
    return 45 - sum;
}