function solution(number) {
  let answer = 0;

  const recursion = (currentArr, start) => {
    if (currentArr.length === 3) {
      const result = currentArr.reduce((acc, cur) => acc + cur);
      answer += result === 0 ? 1 : 0;
    }

    number.forEach((num, index) => {
      if (index >= start) {
        recursion([...currentArr, num], index + 1);
      }
    });
  };

  recursion([], 0);

  return answer;
}
