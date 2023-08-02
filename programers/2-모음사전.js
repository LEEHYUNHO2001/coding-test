function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const words = [];

  function dfs(currentWord) {
    words.push(currentWord);
    if (currentWord.length === 5) return;
    for (let i = 0; i < vowels.length; i++) {
      dfs(currentWord + vowels[i]);
    }
  }

  dfs("");

  return words.indexOf(word);
}
