function solution(spell, dic) {
  let answer = 0;
  dic.forEach((str) => {
    const set = [];
    const exist = [...str].every((char) => {
      if (spell.includes(char)) {
        if (!set.includes(char)) set.push(char);
        return true;
      }
    });
    if (exist && set.length === spell.length) answer += 1;
  });
  return answer === 0 ? 2 : answer;
}
