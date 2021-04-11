const s = "Javas";

for (let i = 0; i < s.length; i++) { // INCREMENT || Operator ++ || Penjumlahan
    console.log(s[i]); 
}

//=================================

const x = "Javas";

for (let i = x.length; i >=0; i--) { // Decrement || Operator -- || Pengurangan
    console.log(x[i]);
}

//=================================

function reverse(s){
    let r =""
    for (let i = s.length-1; i >= 0; i--) {
        r = r + s[i]
    }
    return r;
}

console.log(reverse("code id"));
    
//===========================

function reverse(s){
    let r =""
    for (let i = 0; i < s.length; i++) {
        r = r + s[i]
    }
    return r;
}

console.log(reverse("code id"));
    