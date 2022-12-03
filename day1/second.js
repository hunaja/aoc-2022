module.exports = (arr) => arr
    .reduce((acc, valStr) => {
        if (!valStr.trim()) {
            acc.push(0);
            return acc;
        }

        acc[acc.length - 1] += Number(valStr);
        return acc;
    }, [0])
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, val) => acc + val, 0);
