// 4. Buat function javascript inputan string, lalu hitung berapa banyak kata yang diinput. 

console.log("Soal 4")
function countWords(words) {
    let countResult = 0
    if (words !== "" && words !==" ") {
        for (let i = 0; i < words.length; i++) {
            if ((words[i] === " " && i !== words.length-1 && i !== 0) || i === words.length-1) countResult++
        }
    }
    return countResult
}
console.log(countWords("aku suka javascript fullstack"))
