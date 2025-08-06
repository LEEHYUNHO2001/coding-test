// 시간 초과
// function solution(numbers) {
//   return numbers.map((cur, index, arr) => {
//     const rest = arr.slice(index + 1);
//     const backLargeNum = rest.find((num) => num > cur);
//     return backLargeNum !== undefined ? backLargeNum : -1;
//   });
// }

function solution(numbers) {
  const stack = [];

  return numbers.reduceRight((acc, current, index) => {
    while (stack.length && stack[stack.length - 1] <= current) {
      stack.pop();
    }

    const nextGreater = stack.length ? stack[stack.length - 1] : -1;
    stack.push(current);

    acc[index] = nextGreater;

    return acc;
  }, new Array(numbers.length));
}
