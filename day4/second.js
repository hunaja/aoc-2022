module.exports = (arr) => arr
    .map((val) => {
        const [first, second] = val.split(",");
        const [firstFrom, firstTo] = first.split("-").map((str) => Number(str));
        const [secondFrom, secondTo] = second.split("-").map((str) => Number(str));

        const noOverlap = (secondFrom > firstTo || secondTo < firstFrom)
            || (firstFrom > secondTo || firstTo < secondFrom);
        return !noOverlap;
    })
    .reduce((acc, val) => acc + val, 0);
