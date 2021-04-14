function kataTerpanjang(word) {
    let t = 0;
    let ts = word.split(' ');
        for(var i=0; i<ts.length;i++){
            if(ts[i].length>t){
                word = ts[i];
                  t = ts[i].length;
            }
        }
    return word;
}
    
    console.log(kataTerpanjang("aku suka bootcamp sentul city"));