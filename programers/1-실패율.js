function solution(N, stages) {
    var answer = []
    var trans = stages.length
    for(let i = 0; i < N; i++){
        if(stages.includes(i+1) === true){
            let cnt = stages.filter(num => i+1 === num).length
            let cnt_per = (cnt/trans).toFixed(100)
            trans -= cnt
            answer.push({idx:i+1, per:cnt_per})
        } else{
            answer.push({idx:i+1, per:0})
        }
    }
    answer.sort((a, b) => {
        if(a.per > b.per){
            return -1       //내림차순
        } else if(a.per < b.per){
            return 1        //오름차순
        } else{
            if(a.idx > b.idx){
                return 1    //오름차순
            } else{
                return -1   //내림차순
            }
        }
    })
    return answer.map(element=>element.idx)
}