/* 9. Buat function randomPosition(), user input satu digit angka integer antara angka 0-9. Lalu
      tampilkan angka yang diinput dalm tiga digit integer antara range 100-900. Angka yang diinput
      bisa dalam posisi ratusan, puluhan, satuan atau semua posisi. */

console.log("Soal 9")
function randomPosition(number) {
    let resultArr = []
    let tempNumber
    for (let i = 100; i <= 900; i++) {
        tempIndex = i
        while (tempIndex) {
            tempNumber = tempIndex % 10
            if (tempNumber === number) resultArr.push(i)
            tempIndex = Math.floor(tempIndex/10)
        } 
    }
    return resultArr
}
console.log(randomPosition(7))
