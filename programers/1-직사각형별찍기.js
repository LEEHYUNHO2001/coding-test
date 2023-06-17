process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const row = new Array(a).fill("*").join("");
  const column = new Array(b).fill("0");

  column.forEach((c) => console.log(row));
});
