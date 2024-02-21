const findTheOldest = function(arr) {
    const year = new Date().getFullYear()  
    return arr.reduce((oldest, current) => {
        let currentYear, oldestYear;
        if (current.yearOfDeath === undefined) {
            currentYear = year - current.yearOfBirth;
        } else {
            currentYear = current.yearOfDeath - current.yearOfBirth;
        }

        if (oldest.yearOfDeath === undefined) {
            oldestYear = year - oldest.yearOfBirth;
        } else {
            oldestYear = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        return oldestYear > currentYear ? oldest: current;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
