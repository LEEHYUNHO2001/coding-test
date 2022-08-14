function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const report_list = {};

  for (let i = 0; i < report.length; i++) {
    const [user, reportedUser] = report[i].split(" ");
    if (!report_list[reportedUser]) report_list[reportedUser] = [user];
    if (!report_list[reportedUser].includes(user))
      report_list[reportedUser].push(user);
  }

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}
