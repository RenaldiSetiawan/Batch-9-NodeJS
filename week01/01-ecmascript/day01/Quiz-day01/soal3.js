/* 3. Seekor katak ingin menyebrang jalan dari posisi X=10, ke posisi Y=85. Untuk Satu kali
lompatan, katak hanya bisa menempuh K=30. Buat function dan hitung berapa jumlah lompatan
yang dibutuhkan untuk mencapai posisi X+K >= Y. */

console.log("Soal 3")
function howManyJumps(awal,akhir,loncat) {
    let jarak = akhir - awal
    let jumlah = Math.ceil(jarak/loncat)
    return jumlah
}
console.log(howManyJumps(10,80,30))

    