/* 2. User meng-input 4 digit angka, contoh 1234. Buat function untuk reverse angka */

console.log("Soal 2")
function reverseNumber(number) {
    let a = 0
    while (number) {
        a = (a*10) + (number%10)
        number = Math.floor(number/10)
    }
    return a
}
console.log(reverseNumber(1234))