// 키패드 좌표 구해서 풀기
function Manhattan(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function solution(numbers, hand) {
  let answer = "";

  const left = [1, 4, 7];
  const right = [3, 6, 9];

  let currentLeft = [0, 3];
  let currentRight = [2, 3];

  numbers.forEach((number) => {
    const n = number === 0 ? 11 : number;
    const positionY = parseInt(n / 3);

    if (left.includes(n)) {
      currentLeft = [0, positionY];
      answer += "L";
    } else if (right.includes(n)) {
      currentRight = [2, positionY - 1];
      answer += "R";
    } else {
      const currentN = [1, positionY];
      const ManhattanLeft = Manhattan(currentLeft, currentN);
      const ManhattanRight = Manhattan(currentRight, currentN);
      if (ManhattanLeft > ManhattanRight) {
        currentRight = currentN;
        answer += "R";
      } else if (ManhattanLeft < ManhattanRight) {
        currentLeft = currentN;
        answer += "L";
      } else {
        if (hand === "right") {
          currentRight = currentN;
          answer += "R";
        } else {
          currentLeft = currentN;
          answer += "L";
        }
      }
    }
  });

  return answer;
}

// 객체 활용
function solution(numbers, hand) {
  const keypad = {
    1: [0, 1],
    2: [1, 1],
    3: [2, 1],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    7: [0, 3],
    8: [1, 3],
    9: [2, 3],
    "*": [0, 4],
    0: [1, 4],
    "#": [2, 4],
  };
  let answer = "";
  let lp = "*";
  let rp = "#";
  const h = hand === "left" ? "L" : "R";

  for (let i = 0; i < numbers.length; i++) {
    if ([1, 4, 7].includes(numbers[i])) {
      answer += "L";
      lp = numbers[i];
    } else if ([3, 6, 9].includes(numbers[i])) {
      answer += "R";
      rp = numbers[i];
    } else {
      var left =
        Math.abs(keypad[numbers[i]][0] - keypad[lp][0]) +
        Math.abs(keypad[numbers[i]][1] - keypad[lp][1]);
      var right =
        Math.abs(keypad[numbers[i]][0] - keypad[rp][0]) +
        Math.abs(keypad[numbers[i]][1] - keypad[rp][1]);
      if (left === right) {
        answer += h;
      } else if (left < right) {
        answer += "L";
      } else {
        answer += "R";
      }
      answer[answer.length - 1] === "L" ? (lp = numbers[i]) : (rp = numbers[i]);
    }
  }
  return answer;
}
