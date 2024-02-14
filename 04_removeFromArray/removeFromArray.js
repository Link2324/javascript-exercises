const removeFromArray = function(array, item) {
    const newArray = [];
    const args = Array.from(arguments);
    outer:
    for (const el of array) {
        for (let i = 1; i < args.length; i++) {
            if (el === args[i]) {
                continue outer;
            }
        }
        newArray.push(el);
    }

    return newArray;
};

console.log(removeFromArray([12, 12, 12], 2 ,3 ,4 ,4))
// Do not edit below this line
module.exports = removeFromArray;
