var nums = [100, 200, 300, 400, 500];
console.log(nums.filter(v => v < 400));

/*
다른 풀이1
nums.pop()
nums.pop()
*/ 

/*
다른 풀이2
var numSplice = nums.splice(3, 2);
*/