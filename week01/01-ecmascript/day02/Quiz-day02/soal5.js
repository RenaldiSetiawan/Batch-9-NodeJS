let numbers = [1, 2, 3, 4, 5]

function sumResult(arrayToCheck, value) {
    let result = []
    for (let i = 0; i < arrayToCheck.length; i++) {
        for (let j = 0; j < i; j++) {
            if ((arrayToCheck[i]+arrayToCheck[j] === value)) result.push([arrayToCheck[i], arrayToCheck[j]])
        }
    }
    return result
}
console.log(sumResult(numbers, 9))