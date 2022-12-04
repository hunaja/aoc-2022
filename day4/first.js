module.exports = (arr) => arr
    .map((val) => {
        const [first, second] = val.split(",");
        const [firstFrom, firstTo] = first.split("-").map((str) => Number(str));
        const [secondFrom, secondTo] = second.split("-").map((str) => Number(str));

        return (secondFrom >= firstFrom && secondTo <= firstTo)
            || (firstFrom >= secondFrom && firstTo <= secondTo);
    })
    .reduce((acc, val) => acc + val, 0);
