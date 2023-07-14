function solution(arr1, arr2) {
  return arr1.map((arr, arrIndex) =>
    arr.map((num, numIndex) => num + arr2[arrIndex][numIndex])
  );
}
