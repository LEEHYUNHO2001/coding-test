function solution(myString, pat) {
  const reversePat = [...pat]
    .map((char) => (char === "A" ? "B" : "A"))
    .join("");
  return myString.includes(reversePat) ? 1 : 0;
}
