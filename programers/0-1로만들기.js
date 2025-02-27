function solution(num_list) {
  const answerList = num_list.map((num) => getOne(num));
  return answerList.reduce((acc, num) => acc + num, 0);
}

function getOne(num, count = 0) {
  if (num === 1) return count;

  if (num % 2 === 0) return getOne(num / 2, count + 1);
  else return getOne((num - 1) / 2, count + 1);
}
