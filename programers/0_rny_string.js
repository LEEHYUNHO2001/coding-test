function solution(rny_string) {
  return rny_string
    .split("")
    .map((char) => (char === "m" ? "rn" : char))
    .join("");
}
