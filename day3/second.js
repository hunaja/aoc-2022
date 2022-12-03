const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

module.exports = (arr) => arr
    .reduce((acc, val, i) => {
        if (i % 3 === 0) acc.push([]);
        acc.at(-1).push(new Set(val));
        return acc;
    }, [])
    .map(([first, second, third]) => {
        const char = [...first].find((c) => second.has(c) && third.has(c));
        return CHARS.indexOf(char) + 1;
    })
    .reduce((acc, val) => acc + val, 0);
