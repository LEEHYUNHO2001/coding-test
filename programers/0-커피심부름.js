function solution(order) {
  let answer = 0;
  order.forEach((menu) => {
    if (menu.includes("cafelatte")) return (answer += 5000);
    return (answer += 4500);
  });
  return answer;
}
