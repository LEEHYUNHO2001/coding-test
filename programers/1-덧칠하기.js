function solution(n, m, section) {
  //     시간 초과 : 최악의 경우 시간 복잡도가 O(n^2)
  //     let result = 0;
  //     let point = 0;

  //     while(section.length > 0) {
  //         point = section.shift();
  //         point += m - 1;
  //         result += 1;
  //         section = section.filter(num => num > point);
  //     }

  let result = 0;
  let point = 0;

  section.forEach((num) => {
    if (num > point) {
      point = num;
      point += m - 1;
      result += 1;
    }
  });

  return result;
}
