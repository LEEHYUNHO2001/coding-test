function solution(rsp) {
  return [...rsp]
    .map((char) => {
      if (char === "2") return "0";
      else if (char === "0") return "5";
      return "2";
    })
    .join("");
}
