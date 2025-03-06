function solution(arr, query) {
  let answer = arr;

  query.forEach((num, index) => {
    if (index % 2 === 0) {
      return (answer = answer.slice(0, num + 1));
    }
    return (answer = answer.slice(num));
  });

  return answer;
}
