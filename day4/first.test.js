const fs = require("fs/promises");
const path = require("path");
const solve = require("./first.js");

describe("Day 4 #1", () => {
    it("solves the example case correctly", () => {
        const input = [
            "2-4,6-8",
            "2-3,4-5",
            "5-7,7-9",
            "2-8,3-7",
            "6-6,4-6",
            "2-6,4-8",
        ];

        expect(solve(input)).toBe(2);
    });

    it("solves the puzzle correctly", async () => {
        const inputBuffer = await fs.readFile(path.join(__dirname, "input.txt"));
        const input = inputBuffer.toString().split("\n");

        expect(solve(input)).toBe(515);
    });
});
