function solution(my_string, m, c) {
    const chunks = my_string.split("").reduce((acc, cur, index) => {
        if (index % m === 0) acc.push("");
        acc[acc.length - 1] += cur;
        return acc;
    }, []);

    return chunks.map((str) => str[c - 1]).join("");
}