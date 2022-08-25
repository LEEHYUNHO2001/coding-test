function solution(clothes) {
    var answer = 0;
    let dict = {};
    let mul = 1;
    
    for(let i = 0; i < clothes.length; i++){
        let cnt = dict[clothes[i][1]] || 1;
        dict[clothes[i][1]] = cnt + 1;
    }
    
    for(let key in dict){
        let value = dict[key];
        mul *= value;
    }

    
    return mul - 1;
}