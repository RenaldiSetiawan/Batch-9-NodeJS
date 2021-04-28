/* 7. Buat function untuk menampilkan deretan angka urut seperti :
 */

console.log("Soal 7")
function deretSatu(number) {
    let satu = 1
    let arraySatu = []
    
    for (let i = 0; i < number; i++) {
        arraySatu.push(satu)
        satu = (satu*10)+1
    }
    return arraySatu
}
console.log(deretSatu(5))