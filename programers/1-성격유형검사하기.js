function solution(survey, choices) {
    let answer = '';
    const total = {R:0,  T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    const score = [3, 2, 1, 0, 1, 2, 3];
    choices.forEach((choice, index) => {
        if(choice > 4){
            total[survey[index][1]] = total[survey[index][1]] + score[choice - 1];
        } else if(choice < 4){
           total[survey[index][0]] = total[survey[index][0]] + score[choice - 1]; 
        }
        
    })
    console.log(total)
    const fir = total['R'] >= total['T'] ? 'R' : 'T';
    const sec = total['C'] >= total['F'] ? 'C' : 'F';
    const thr = total['J'] >= total['M'] ? 'J' : 'M';
    const four = total['A'] >= total['N'] ? 'A' : 'N';
    answer = fir + sec + thr + four
    return answer;
}