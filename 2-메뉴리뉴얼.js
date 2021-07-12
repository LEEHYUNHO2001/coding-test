function solution(orders, course) {
    
    let answer = []
    let dict = {}
    for(let num of course){
        for(let i = 0; i < orders.length; i++){
            if(orders[i] < num) continue
            combination(orders[i].split('').sort(), '', orders[i].length, num, 0)
        }
    }
    
    let menu = []
    let max = 0
    for(let num of course){
        for(let key in dict){
            if(key.length === num){
                let value = dict[key]
                if(value > 1){
                    if(value > max){
                        max = value
                        menu = [key]
                    } else if(value === max){
                        menu.push(key)
                    }
                }
            }
        }
        if(menu.length > 0){
           for(let i = 0; i < menu.length; i++){
               answer.push(menu[i])
           }
        }
        
        menu = []
        max = 0
    }

    function combination(arr, target, len, r, count){
        if(r === 0){
            let cnt = dict[target] || 0
            dict[target] = cnt + 1
        }
        else if(len === 0 || len < r) return
        else{
            combination(arr, target+arr[count], len-1, r-1, count+1)
            combination(arr, target, len-1, r, count+1)
        }
    }    
    return answer.sort()
}