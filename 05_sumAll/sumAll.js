const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    let sum = 0;
    let larger = (num1 > num2) ? num1 : num2;
    let smaller = (num1 < num2) ? num1 : num2;

    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
