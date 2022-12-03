const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

module.exports = (arr) => arr
    .reduce((acc, val) => {
        if (val % 2 === 1) throw new Error();

        const half = val.length / 2;
        const firstPart = val.slice(0, half);
        const lastPart = new Set(val.slice(-half));

        const char = [...firstPart].find((c) => lastPart.has(c));
        return acc + CHARS.indexOf(char) + 1;
    }, 0);
