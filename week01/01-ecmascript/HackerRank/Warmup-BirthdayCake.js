function birthdayCakeCandles(candles) {
    let max = 0;
    let counter = 0;

    candles.forEach(item => {
        if (item > max) {
            max = item;
            counter = 1;
        } else if (item === max) {
            counter++;
        }
    });
    return counter;
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));