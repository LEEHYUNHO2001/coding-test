function solution(numbers) {
  return numbers.map(f);
}

// 비트 연산자 이용
// function bitCal(x) {
//     if (x % 2 === 0) return x + 1; // 짝수면 +1이 답

//     let bit = 1;
//     while ((x & bit) !== 0) bit <<= 1; // 0이 나올 때까지 비트 이동
//     return x + bit - (bit >> 1);
// }

function f(x) {
  let binary = x.toString(2); // 2진수 변환

  if (!binary.includes("0")) return parseInt(`10${binary.slice(1)}`, 2);

  const arr = [...binary];
  const zeroLastIndex = arr.lastIndexOf("0"); // 가장 마지막 '0'의 위치 찾기
  binary = arr
    .map((bit, index) =>
      index === zeroLastIndex ? "1" : index === zeroLastIndex + 1 ? "0" : bit
    )
    .join("");
  return parseInt(binary, 2);
}
