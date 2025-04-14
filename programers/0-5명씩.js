function solution(names) {
  const groups = [];
  let currentArr = [];

  names.forEach((name, index) => {
    currentArr.push(name);
    if (currentArr.length === 5 || index === names.length - 1) {
      groups.push(currentArr);
      currentArr = [];
    }
  });

  return groups.map((group) => group[0]);
}
