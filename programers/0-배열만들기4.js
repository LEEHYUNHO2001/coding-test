function solution(arr) {
    let i = 0;
    let stk = [];

    while (i < arr.length) {
        if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            i += 1;
        } else {
            stk.pop();
        }
    }

    return stk;
}

// 비효율
// function solution(arr) {
//     let i = 0;
//     var stk = [];

//     function getStk(i, stk) {
//         if (i >= arr.length) return stk;

//         if (stk.length === 0) {
//             stk.push(arr[i]);
//             i += 1;
//             return getStk(i, stk);
//         } else if (stk[stk.length - 1] < arr[i]){
//             stk.push(arr[i]);
//             i += 1;
//             return getStk(i, stk);
//         } else if (stk[stk.length - 1] >= arr[i]) {
//             stk.pop();
//             return getStk(i, stk);
//         }
//     }

//     return getStk(i, stk)
// }