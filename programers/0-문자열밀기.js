function solution(A, B) {
  if (A.length !== B.length) return -1; // A와 B의 길이가 다르면 불가능한 경우

  for (let i = 0; i < A.length; i++) {
    if (A === B) return i; // A와 B가 동일하면 밀어야 하는 횟수 반환
    const lastChar = A[A.length - 1]; // A의 마지막 문자
    A = [lastChar, ...A.slice(0, A.length - 1)].join(""); // A를 오른쪽으로 한 칸 밀기
  }

  return -1; // A를 밀어도 B와 같아지지 않으면 불가능한 경우
}
