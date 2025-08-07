function solution(num_list) {
  let a = "";
  let b = "";

  num_list.forEach((item) =>
    item % 2 === 0 ? (a += `${item}`) : (b += `${item}`)
  );
  return Number(a) + Number(b);
}
