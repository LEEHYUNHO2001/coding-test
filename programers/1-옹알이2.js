const canBabblingList = ["aya", "ye", "woo", "ma"];

function solution(babblingList) {
  return babblingList.filter(isBabbling).length;
}

function isBabbling(babbling, prev) {
  if (babbling === "") return true;

  return canBabblingList.some(
    (canBabbling) =>
      prev !== canBabbling &&
      babbling.startsWith(canBabbling) &&
      isBabbling(babbling.slice(canBabbling.length), canBabbling)
  );
}
