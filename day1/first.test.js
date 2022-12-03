const fs = require("fs/promises");
const path = require("path");
const solve = require("./first.js");

describe("Day 1 #1", () => {
    it("solves the example case correctly", () => {
        const input = [
            "1000",
            "2000",
            "3000",
            "",
            "4000",
            "",
            "5000",
            "6000",
            "",
            "7000",
            "8000",
            "9000",
            "",
            "10000",
        ];

        expect(solve(input)).toBe(24000);
    });

    it("solves the puzzle correctly", async () => {
        const inputBuffer = await fs.readFile(path.join(__dirname, "input.txt"));
        const input = inputBuffer.toString().split("\n");

        expect(solve(input)).toBe(69177);
    });
});
