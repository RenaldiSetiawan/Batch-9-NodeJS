/* 6. Buat function untuk menampilkan ukuran ram memory dari 1 byte sampe 1GB. Contoh : 1,
  2,4,8,16,32,64,128 dan seterusnya.
*/

console.log("Soal 6")
function deretRam(k) {
    let ram = 1
    let ramArr = []
    for (let i = 0; i < k; i++) {
        ramArr.push(ram)
        ram *= 2
    }
    return ramArr
}
console.log(deretRam(7))
