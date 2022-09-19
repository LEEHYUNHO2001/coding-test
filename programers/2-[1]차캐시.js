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
