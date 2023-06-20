function solution(s) {
  const words = s.split(" ");
  const answerWords = words.map((word) => {
    return word
      .split("")
      .map((w, i) => (i % 2 === 0 ? w.toUpperCase() : w.toLowerCase()))
      .join("");
  });

  return answerWords.join(" ");
}
