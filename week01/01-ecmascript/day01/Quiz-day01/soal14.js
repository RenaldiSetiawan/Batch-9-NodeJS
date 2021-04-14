function segitiga(n) {
    let hasil = '';
    for (let i = 0; i < n; i++) {  // cetak bintang kebawah
        for (let j = 0; j <= i; j++) { //
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(5));



