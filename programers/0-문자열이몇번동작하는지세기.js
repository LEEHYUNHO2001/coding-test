function solution(myString, pat) {
  const patLength = pat.length;

  function searchPat(str, cnt) {
    if (str.length < patLength) return cnt;

    return searchPat(
      str.substring(1),
      str.substring(0, patLength) === pat ? cnt + 1 : cnt
    );
  }

  return searchPat(myString, 0);
}
