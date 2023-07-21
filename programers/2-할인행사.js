function getItemCount(restDiscount, wantItem) {
  return restDiscount.reduce(
    (acc, cur) => (cur === wantItem ? acc + 1 : acc),
    0
  );
}

function isWant(want, restDiscount, number) {
  return want.every(
    (wantItem, wantIndex) =>
      getItemCount(restDiscount, wantItem) >= number[wantIndex]
  );
}

function solution(want, number, discount) {
  let answer = 0;
  discount.forEach((item, index) => {
    if (want.includes(item)) {
      const restDiscount = discount.slice(index, index + 10);
      return isWant(want, restDiscount, number) ? (answer += 1) : answer;
    }
  });
  return answer;
}
