/* 17.Seorang pendaki memulai pendakian melewati gunung dan bukit. Dia akan memulai pendakian
      dari sea level. Step pertama dia bisa jadi mendaki gunung (U=Uphill) atau menuruni lembah
      (D=Downhill), bisa jadi dia akan Uphill 2 kali sampai puncak gunung atau downhill 2 kali sampai
      lembah. Pendaki akan dihitung melewati 1 gunung jika dimulai dari sea-level dan berakhir di sea
      level. Buat program untuk menghitung berapa gunung yang dilewati jika inputan uphill downhill
      diwakili oleh U dan D, contoh :
*/
function countMountain(steps) {
    let alt = 0
    let isHigh = false
    let valley = 0
    step = steps.split("")
    for (let i = 0; i < step.length; i++) {
        if (step[i] === "U") alt += 1
        else if (step[i] === "D") alt -= 1

        if (alt === 0 && isHigh) valley++

        isHigh = alt > 0? true : false
    }
    return valley
}
console.log(countMountain("UDDDUDUU") + " gunung")
console.log(countMountain("UDUDUDUUDDD") + " gunung")