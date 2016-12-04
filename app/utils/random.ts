export function getRandomValueBetween(start: Number, end: Number) {
    return Math.floor((Math.random() * end - start + 1) + start);
}
