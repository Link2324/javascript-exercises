const palindromes = function (str) {
    const arr = str.toLowerCase().split('')
            .filter((item) => {
                let regex = /^[a-z0-9]+$/;
                return regex.test(item)
            })

    let reverse = arr.slice().reverse();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reverse[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
