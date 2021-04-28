function miniMaxSum(arr) {
    let sortarr = arr.sort();
    let maxSum = 0;
    let minSum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        minSum += sortarr[i];
    }
    for (let j = arr.length - 1; j > 0; j--) {
        maxSum += sortarr[j];
    }
    console.log(minSum + ' ' + maxSum);
}