function searchP(splitPlace) {
  const positionQueue = [];

  splitPlace.forEach((rows, i) =>
    rows.forEach((item, j) => {
      if (item === "P") {
        positionQueue.push([i, j]);
      }
    })
  );

  return positionQueue;
}

function isBreak(place) {
  const splitPlace = place.map((data) => data.split(""));
  const positionQueue = searchP(splitPlace);
  const x = [-1, 1, 0, 0];
  const y = [0, 0, 1, -1];

  while (positionQueue.length) {
    const [a, b] = positionQueue.shift();
    for (let i = 0; i < 4; i++) {
      const onceX = a + x[i];
      const onceY = b + y[i];
      if (onceX < 0 || onceX > 4 || onceY < 0 || onceY > 4) continue;
      if (splitPlace[onceX][onceY] === "X") continue;
      if (splitPlace[onceX][onceY] === "P") {
        console.log(a, b);
        return 0;
      }

      for (let j = 0; j < 4; j++) {
        const twoAndArondX = onceX + x[j];
        const twoAndArondY = onceY + y[j];

        if (
          twoAndArondX < 0 ||
          twoAndArondX > 4 ||
          twoAndArondY < 0 ||
          twoAndArondY > 4
        )
          continue;
        if (twoAndArondX === a && twoAndArondY === b) continue;
        if (splitPlace[twoAndArondX][twoAndArondY] === "P") return 0;
      }
    }
  }
  return 1;
}

function solution(places) {
  const answer = places.map((place) => isBreak(place));
  return answer;
}
