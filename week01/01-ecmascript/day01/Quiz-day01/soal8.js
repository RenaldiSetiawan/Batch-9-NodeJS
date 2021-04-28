// 8. Buat function untuk menampilkan deretan angka urut seperti :

console.log("Soal 8")
function deretNegation(number) {
    let negation = []
    let aTemp = -1
    let bTemp
    for (let i = 0; i < number; i++) {
        if (i % 2 === 0){
            negation.push(aTemp)
            bTemp = aTemp * -1
        } 
        else {
            negation.push(bTemp)
            aTemp -= 1
        }
    }
    return negation
}
console.log(deretNegation(25))