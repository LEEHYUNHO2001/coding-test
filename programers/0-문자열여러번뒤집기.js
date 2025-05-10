function solution(my_string, queries) {
  let answer = my_string.split("");

  queries.forEach(([s, e]) => {
    const reversedArr = answer.slice(s, e + 1).reverse();
    answer.splice(s, e - s + 1, ...reversedArr);
  });

  return answer.join("");
}
