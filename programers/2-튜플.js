function isNum(str){
    var patten = /^[0-9]+$/
    return patten.test(str) ? true : false
}

function trans(s){
    let trans_arr = []
    let arr = []
    let num = ''
    let cnt = 0
    for(let str of s.slice(1, s.length-1)){
        if(str === "{") cnt += 1
        if(str === "}") cnt -= 1
        if(cnt === 1){
            if(isNum(str)){
                num += str           
            } else if(str === ','){
                arr.push(parseInt(num))
                num = ''
            }
        } else if(cnt === 0){
            if(num != ''){
                arr.push(parseInt(num))
                num = ''                
            }
            if(str !=","){
                trans_arr.push(arr)
                arr = []                
            }
        }
    }
    return trans_arr    
}

function solution(s) {
    let answer = []
    let arr = trans(s)
    
    arr.sort((a, b) => {
        if(a.length > b.length) return 1
        else return -1
    })
    answer.push(arr[0][0])
    for(let i = 1; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(answer.includes(arr[i][j])){
                continue
            } else{
                answer.push(arr[i][j])
            }
        }
    }
    return answer
}