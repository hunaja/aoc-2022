import fs from "fs/promises";

const inputBuffer = await fs.readFile("both.input");
const input = inputBuffer.toString();

const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const result = input.split("\n")
    .reduce((acc, val, i) => {
        if (i % 3 === 0) acc.push([]);
        acc.at(-1).push(val);
        return acc;
    }, [])
    .map(([first, second, third]) => {
        const char = [...first].find((c) => second.includes(c) && third.includes(c));
        return CHARS.indexOf(char) + 1;
    })
    .reduce((acc, val) => acc + val, 0);

console.log(result);
