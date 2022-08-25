function trans(n, a, b){
    let num = a | b
    let bin = num.toString(2)
    let tran = ''
    
    //5칸 지도면 or값 4자리 나왔을때 앞에 0 채우기
    while (bin.length < n){
        bin = '0' + bin.slice(0,bin.length)
    }
    
    for(let i = 0; i < bin.length; i++){
        if(bin[i] === '1'){
            tran += '#'
        } else{
            tran += ' '
        }
    }
    return tran
}



function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < n; i++){
        answer.push(trans(n, arr1[i], arr2[i]))
    }
    return answer;
}