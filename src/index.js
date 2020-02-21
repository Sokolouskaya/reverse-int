module.exports = function reverse(n) {
    const numArr = String(n).split('');

    if (numArr[0] === '-') numArr.shift();

    const reversedStr = numArr.reverse().join('');

    return +reversedStr;
};
