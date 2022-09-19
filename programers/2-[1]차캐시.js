// splice 이용
function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];
  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((data) => {
    const city = data.toLowerCase();
    if (!cache.includes(city) && cache.length < cacheSize) {
      cache.push(city);
      answer += 5;
    } else if (!cache.includes(city) && cache.length === cacheSize) {
      cache.shift();
      cache.push(city);
      answer += 5;
    } else {
      const idx = cache.indexOf(city);
      cache.splice(idx, 1);
      cache.push(city);
      answer += 1;
    }
  });
  return answer;
}

// 히트된 요소 filter로 거르기
function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];
  cities.forEach((data) => {
    if (cacheSize === 0) return (answer = cities.length * 5);
    const city = data.toLowerCase();
    if (!cache.includes(city) && cache.length < cacheSize) {
      cache.push(city);
      answer += 5;
    } else if (!cache.includes(city) && cache.length === cacheSize) {
      cache.shift();
      cache.push(city);
      answer += 5;
    } else {
      const filteredCache = cache.filter((data) => data !== city);
      cache = filteredCache;
      cache.push(city);
      answer += 1;
    }
  });
  return answer;
}
