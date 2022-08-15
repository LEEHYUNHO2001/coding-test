// new Set을 이용
function solution(nums) {
  const choice = nums.length / 2;
  const setSize = new Set(nums).size;
  const answer = setSize < choice ? setSize : choice;
  return answer;
}

function solution(nums) {
  let answer = [];
  let N = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (answer.length < N) {
      if (!answer.includes(nums[i])) answer.push(nums[i]);
    }
  }
  return answer.length;
}
