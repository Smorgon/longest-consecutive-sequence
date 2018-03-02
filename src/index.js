module.exports = function longestConsecutiveLength(array) {
    array = array.sort((a,b) => {return a-b;});

    let len = array.length;
    let max = 0;
    let count = 1;
    if (len === 1) {
        max = count;
    }
    for (let i = 1; i < len; i++) {
        if (array[i] === (array[i-1] + 1)) {
            count++;
        } else if (array[i] === (array[i-1])) {

        } else {
            if (count > max) {
                max = count;
            }
            count = 1;
        }
    }

    return max;
}
