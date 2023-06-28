function solution(name, yearning, photo) {
  let answer = [];
  const table = {};

  name.forEach((n, i) => (table[n] = yearning[i] || 0));

  photo.forEach((p) => {
    let a = 0;
    p.forEach((n) => (a += table[n] || 0));
    answer.push(a);
  });

  return answer;
}
