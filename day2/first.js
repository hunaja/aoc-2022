const DRAW_POINTS = 3;
const WIN_POINTS = 6;

const shapeScores = { R: 1, P: 2, S: 3 };

module.exports = (arr) => arr
    .filter((val) => val.trim())
    .map((val) => {
        let [oppShape, myShape] = val.split(" ");
        let score = 0;

        switch (myShape) {
        case "X":
            myShape = "R";
            break;
        case "Y":
            myShape = "P";
            break;
        case "Z":
            myShape = "S";
            break;
        default:
            throw new Error();
        }

        score += shapeScores[myShape];

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

        const draw = oppShape === myShape;
        const win = (myShape === "R" && oppShape === "S")
                || (myShape === "S" && oppShape === "P")
                || (myShape === "P" && oppShape === "R");

        if (win) {
            score += WIN_POINTS;
        } else if (draw) {
            score += DRAW_POINTS;
        }

        return score;
    })
    .reduce((acc, val) => acc + val, 0);
