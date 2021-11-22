function solution(new_id) {
    var answer = new_id.toLowerCase();
    answer = answer.replace(/[^a-z0-9-_.]/g, '');
    answer = answer.replace(/\.{2,}/g, '.');
    answer = answer.replace(/^\.|\.$/g, '');
    answer = answer.replace(/^$/, 'a');
    answer = answer.slice(0, 15).replace(/\.$/, '');
    const ans_len = answer.length
    return ans_len <= 2 ? answer + answer.charAt(ans_len - 1).repeat(3 - ans_len) : answer;
}