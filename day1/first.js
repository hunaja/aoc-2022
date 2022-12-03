import fs from "fs/promises";

const inputBuffer = await fs.readFile("both.input");
const input = inputBuffer.toString();

const result = input.split("\n")
    .reduce((acc, valStr) => {
        if (!valStr.trim()) {
            acc.push(0);
            return acc;
        }

        acc[acc.length - 1] += Number(valStr);
        return acc;
    }, [0])
    .sort((a, b) => b - a)[0];

console.log(result);
