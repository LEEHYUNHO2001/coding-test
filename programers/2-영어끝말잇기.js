function solution(n, words) {
  let spoken = new Set();
  let turn = 1;
  let order = 1;

  const isGameOver = words.some((word, index) => {
    const prevWord = words[index - 1];

    if (
      spoken.has(word) ||
      (index > 0 && word[0] !== prevWord[prevWord.length - 1])
    ) {
      return true;
    }

    spoken.add(word);
    turn++;
    if (turn > n) {
      turn = 1;
      order++;
    }
    return false;
  });

  return isGameOver ? [turn, order] : [0, 0];
}
