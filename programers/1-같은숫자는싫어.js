// 마지막 인덱스 undefined이므로 고려 안함
function solution(arr) {
  const answer = [];
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    const num = arr[i];
    const nextNum = arr[i + 1];
    if (num !== nextNum) answer.push(num);
  }
  return answer;
}

// 그래도 마지막 인덱스 고려해주기
function solution(arr) {
  const answer = [];
  const arrLen = arr.length;

  for (let i = 0; i < arrLen - 1; i++) {
    const num = arr[i];
    const nextNum = arr[i + 1];
    if (num !== nextNum) {
      answer.push(num);
      if (arrLen - 2 === i) answer.push(nextNum);
    } else if (arrLen - 2 === i) {
      answer.push(num);
    }
  }
  return answer;
}

// filter사용 (마지막 인덱스 고려안함)
function solution(arr) {
  const answer = arr.filter((num, index) => num !== arr[index + 1]);
  return answer;
}
