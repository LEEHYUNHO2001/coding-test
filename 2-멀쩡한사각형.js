function gcd(w, h) {
    //W와 H의 나머지
    const mod = w % h;
    //나머지가 0일 경우 H를 반환
    if (mod === 0) {
        return h;
    }
    // 만약 0이 아닐경우 mod를 넣어 재귀
    return gcd(h, mod);
}

function solution(w, h) {
    var answer = 1;
    const gcd_num = gcd(w, h)
    
    if(w === 1 || h === 1){
        answer = 0
    } else if(w === h){
        answer = w*h - w
    } else{
        answer = w * h - (w + h - gcd_num);
    }
    return answer;
}