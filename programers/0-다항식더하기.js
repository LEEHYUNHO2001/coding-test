function solution(polynomial) {
  let variable = 0;
  let number = 0;

  polynomial.split(" ").forEach((cal) => {
    if (cal.includes("x")) {
      const num = Number(cal.split("x")[0]) ? Number(cal.split("x")[0]) : 1;
      return (variable += num);
    } else if (cal !== "+") {
      return (number += Number(cal));
    }
  });

  const charVariable = variable === 1 ? "x" : `${variable}x`;

  if (!number) {
    return charVariable;
  } else if (!variable) {
    return `${number}`;
  }
  return `${charVariable} + ${number}`;
}
