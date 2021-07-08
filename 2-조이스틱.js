function solution(name) {
    let len = 0
    //역순이 빠른지..
    const isReverse = trans => trans > 78 ? 91 - trans : trans - 65
    //A를 만났을 경우, 왼쪽으로 돌아가는것이 빠른지..
    const isLeft = (str, idx) => {
        let cnt
        for(cnt = 0; cnt < str.length; cnt++){
            if(str[cnt] != 'A') {
                break
            }
        }
        //연속으로 나온 A 갯수 cnt에서 idx - 1 을 한값 뺀것
        //-> 뒤로가는게 빠를때, 마지막에 빼줄 값.
        //근데 BBAAABAAAA 인 경우는..? => 문제가 뭔가 이상함
        return cnt - (idx - 1) > len ? cnt - (idx - 1) : len
    }
    const answer = [...name].reduce((answer, currentValue, idx) =>{
        //한글자 만들고 한칸 이동
        if(currentValue != 'A'){
            return answer + isReverse(name.charCodeAt(idx)) + 1
        }
        //현재 문자가 A이고 그 전문자가 A 아닐경우
        if(idx === 0 || name[idx-1] != 'A'){
            len = isLeft(name.slice(idx), idx)
        }
        return answer + 1
    }, 0)
    return answer - len - 1
}