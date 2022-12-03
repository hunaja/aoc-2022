import fs from "fs/promises";

const inputBuffer = await fs.readFile("both.input")
const input = inputBuffer.toString();

const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const result = input.split('\n')
    .reduce((acc, val) => {
        const half = val.length / 2;
        const firstPart = val.slice(0, half);
        const lastPart = val.slice(-half);
        
        const char = [...firstPart].find((c) => lastPart.includes(c));
        return acc + CHARS.indexOf(char) + 1;
    }, 0);

console.log(result);
