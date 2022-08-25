var arr = [200, 100, 300];

arr.splice(2, 0, 1000);
console.log(arr);

//출력 [200, 100, 1000, 300]