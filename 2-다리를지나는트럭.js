function solution(bridge_length, weight, truck_weights) {
    let answer = 0
    let bridge = Array.from({length:bridge_length}, () => 0)
    
    while(bridge.length > 0){
        bridge.shift()
        answer += 1
        if(truck_weights.length > 0){
            var sum = bridge.reduce((sum, currValue) => {
                return sum + currValue
            })
        
            if(sum + truck_weights[0] <= weight){
                //truck_weights의 첫번째 값을 빼와서 bridge에 넣고
                //truck_weights는 shift 시킴
                bridge.push(truck_weights.shift())
            } else{
                //처음에 bridge를 shift시켰으므로, 
                //push(0)해주어야 [7 0 0]->[0 7 0]->[0 0 7] 처럼 됨
                bridge.push(0)
            }
        }
    }
    return answer
}