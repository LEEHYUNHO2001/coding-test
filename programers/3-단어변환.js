function solution(begin, target, words) {
  let visited = [];
  const startNode = [begin, 0];
  let queue = [startNode];

  if (!words.includes(target)) return 0;

  while (queue.length) {
    const [value, count] = queue.shift();

    if (value === target) return count;

    words.forEach((word) => {
      let diff = 0;

      if (visited.includes(word)) return;

      for (let i = 0; i < word.length; i++) {
        if (word[i] === value[i]) diff += 1;
      }

      if (diff === word.length - 1) {
        queue.push([word, count + 1]);
        visited.push(word);
      }
    });
  }
}
