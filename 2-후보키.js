//멱집합
function powerSet(arr) {
    let check = new Array(arr.length).fill(false);
    let powerSetArr = [];
    const dfs = (depth) => {
      if (depth === check.length) {
          powerSetArr.push(arr.filter((value, index) => check[index]));
      } else {
          check[depth] = true;
          dfs(depth + 1);
          check[depth] = false;
          dfs(depth + 1);
          }
      };
  dfs(0);
  //정렬
  powerSetArr.sort((a, b) => a.length - b.length);
  //값 있는것만 filter
  powerSetArr = powerSetArr.filter((v) => v.length);
  return powerSetArr;
}
//후보키 확인
function checkOverlap(arr) {
  const setArr = new Set();
    for (let x of arr) {
      if (setArr.has(x.join(""))) return false;
      else setArr.add(x.join(""));
    }
  return true;
}

function solution(relation) {
  let answer = 0;
  //from 메소드로 속성 index를 배열로 담음
  const idxArr = Array.from({ length: relation[0].length }, (v, idx) => idx);

  //powerSet 메소드로 idxArr 멱집합 구하기
  let caseIdxArr = powerSet(idxArr);

  while (caseIdxArr.length) {
      const nowCase = caseIdxArr[0];
      //nowCase에 있는 index의 속성으로만 배열을 만든다.
      const checkRelation = relation.map((v) =>
        v.filter((_, idx) => nowCase.includes(idx))
      );
      //후보키 체크
      if (checkOverlap(checkRelation)) {
        answer++;
        caseIdxArr = caseIdxArr.filter((idxArr) => {
          //지금 nowCase의 인덱스를 모두 포함하고있는 caseIdxArr의 요소를 제외
          for (let idx of nowCase) {
            if (!idxArr.includes(idx)) return true;
          }
          return false;
        });
      } else {
        //nowCase제거
        caseIdxArr.shift();
      }
  }

  return answer;
}