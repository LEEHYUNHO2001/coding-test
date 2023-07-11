function solution(food) {
  let half = "";
  food.shift();
  food.forEach((num, index) => {
    const eat = num / 2;
    half = half.concat(String(index + 1).repeat(eat));
  });

  return half + "0" + half.split("").reverse().join("");
}
