var div = expression => {
    let lst = expression.split('')
    let str_num = ''
    let arr = []
    for(let i = 0; i < lst.length; i++){
        if(lst[i] === '-' || lst[i] === '+' || lst[i] === '*'){
            
            if(str_num != ''){
                arr.push(str_num)
                str_num = ''
            }
            arr.push(lst[i])
        } else{
            str_num += lst[i]
            if(i === lst.length - 1){
                arr.push(str_num)
            }
        }
    }
    return arr
}


function solution(expression) {
    const sign = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '+', '-'],
        ['*', '-', '+']
    ]
    // let arr = expression.split(/(\D)/)
    var arr = div(expression)
    var answer = []
    
    for(let sign_index of sign){
        const arr_copy = arr.slice()
        for(let i of sign_index){
            while(arr_copy.includes(i)){
                let idx = arr_copy.indexOf(i)
                let str = arr_copy[idx-1] + arr_copy[idx] + arr_copy[idx+1]
                arr_copy.splice(idx-1, 3, eval(str))
            }
        }
        if(arr_copy[0] < 0){
            answer.push(arr_copy[0]*(-1))
        } else{
            answer.push(arr_copy[0])
        }
    }
    
    var max = Math.max.apply(null, answer)
    
    return max
}