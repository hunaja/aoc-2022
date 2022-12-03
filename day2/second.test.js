const fs = require("fs/promises");
const path = require("path");
const solve = require("./second.js");

describe("Day 2 #2", () => {
    it("solves the example case correctly", () => {
        const input = [
            "A Y",
            "B X",
            "C Z",
        ];

        expect(solve(input)).toBe(12);
    });

    it("solves the puzzle correctly", async () => {
        const inputBuffer = await fs.readFile(path.join(__dirname, "input.txt"));
        const input = inputBuffer.toString().split("\n");

        expect(solve(input)).toBe(8295);
    });
});
