function deretSatu(k) {
        let hasil = '';
        for (let i = 0; i < k; i++) {
            for (let j = 0; j <= i; j++) {
                hasil += '1';
            }
            hasil += ',';
        }
        return hasil;
    }
    console.log(deretSatu(5));