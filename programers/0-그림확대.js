function solution(picture, k) {
    return picture.reduce((acc, cur) => [
        ...acc,
        ...Array.from({ length: k }).map(() => getRepeatedString(cur, k))
    ], []);
}

function getRepeatedString(piece, k) {
    return piece.split("").map((char) => char.repeat(k)).join("")
}