const fs = require("fs/promises");
const path = require("path");
const solve = require("./second.js");

describe("Day 1 #2", () => {
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

        expect(solve(input)).toBe(45000);
    });

    it("solves the puzzle correctly", async () => {
        const inputBuffer = await fs.readFile(path.join(__dirname, "input.txt"));
        const input = inputBuffer.toString().split("\n");

        expect(solve(input)).toBe(207456);
    });
});
