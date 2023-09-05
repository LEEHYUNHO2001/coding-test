function solution(emergency) {
  const sortedEmergency = [...emergency].sort((a, b) => b - a);
  return emergency.map((num) => sortedEmergency.indexOf(num) + 1);
}
