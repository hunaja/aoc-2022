import fs from "fs/promises";

const inputBuffer = await fs.readFile("both.input")
const input = inputBuffer.toString();

const DRAW_POINTS = 3;
const WIN_POINTS = 6;

const shapeScores = { "R": 1, "P": 2, "S": 3 };

const result = input.split('\n')
    .filter((val) => val.trim())
    .map((val) => {
        let [oppShape, roundEnd] = val.split(" ");
        let score = 0;

        switch (oppShape) {
        case "A":
            oppShape = "R";
            break;
        case "B":
            oppShape = "P";
            break;
        case "C":
            oppShape = "S";
            break;
        default:
            throw new Error();
        }
        
        switch (roundEnd) {
        // I need to lose...
        case "X":
            switch (oppShape) {
                case "R":
                    score += shapeScores["S"];
                    break;
                case "S":
                    score += shapeScores["P"];
                    break;
                case "P":
                    score += shapeScores["R"];
                    break;
                default:
                    throw new Error();
            }
            break;

        // The round must end in a draw
        case "Y":
            score = shapeScores[oppShape] + DRAW_POINTS;
            break;
        
        // I need to win...
        case "Z":
            switch (oppShape) {
                case "R":
                    score += shapeScores["P"];
                    break;
                case "S":
                    score += shapeScores["R"];
                    break;
                case "P":
                    score += shapeScores["S"];
                    break;
                default:
                    throw new Error();
            }

            score += WIN_POINTS;
            break;

        default:
            throw new Error();
        }

        return score;
    })
    .reduce((acc, val) => acc + val, 0);

console.log(result);
