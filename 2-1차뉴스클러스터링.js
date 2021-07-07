/*function isAlpha(str) {
    var pattern = /^[a-zA-Z]+$/;
    return (pattern.test(str)) ? true : false;
}
*/
function trans(str){
    str = str.toUpperCase()
    let arr = []
    for(let i = 0; i < str.length - 1; i++){
        let check = str.slice(i, i+2)
        if(check.search(/[^A-Z]/g) >= 0){
            continue
        }
        arr.push(check)
    }
    return arr
}


function solution(str1, str2) {
    var answer = 0
    str1 = trans(str1)
    str2 = trans(str2)
    var inter = []
    var union = str2.slice()
    
    for(let i = 0; i < str2.length; i++){
        if(str1.indexOf(str2[i]) >= 0){
            inter.push(str1.splice(str1.indexOf(str2[i]), 1))
        }
    }
    for(let i = 0; i < str1.length; i++){
        union.push(str1[i])
    }
    
    if(union.length === 0){
        answer = 65536
    } else if(inter.length === 0){
        answer === 0
    } else{
        answer = Math.floor((inter.length/union.length)*65536)
    }
    
    return answer
}