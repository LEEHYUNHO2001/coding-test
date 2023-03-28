function solution(park, routes) {
  let answer = [];

  const maxCol = park[0].length - 1;
  const maxRow = park.length - 1;

  park.some((road, index) => {
    const start = road.indexOf("S");
    if (start !== -1) {
      answer = [index, start];
    }
  });

  let [row, col] = answer;

  routes.forEach((route) => {
    const [direction, cnt] = route.split(" ");

    let tempRow = row;
    let tempCol = col;
    let flag = true;

    for (let i = 0; i < Number(cnt); i++) {
      if (direction === "E") tempCol++;
      else if (direction === "W") tempCol--;
      else if (direction === "S") tempRow++;
      else if (direction === "N") tempRow--;

      if (
        tempRow > maxRow ||
        tempRow < 0 ||
        tempCol > maxCol ||
        tempCol < 0 ||
        park[tempRow][tempCol] === "X"
      ) {
        flag = false;
        break;
      }
    }

    if (flag) {
      row = tempRow;
      col = tempCol;
    }
  });
  return [row, col];
}
