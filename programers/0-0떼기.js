function solution(n_str) {
  let index = 0;
  const n_arr = [...n_str];
  n_arr.some((char, i) => {
    if (char !== "0") {
      index = i;
      return true;
    }
  });

  return n_arr.slice(index).join("");
}
