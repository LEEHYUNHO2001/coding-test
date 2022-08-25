function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }

    }
}

// function solution(participant, completion) {
//     completion.forEach(element => {
//       participant.splice(participant.indexOf(element),1);
//     });
//   return participant[0];
// }