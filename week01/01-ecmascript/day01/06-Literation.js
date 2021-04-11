for ( let i = 0; i < 10; i++) {
    console.log("i : "+i);
}

const s = "Hello JavaSript";

for (let i = 0; i < s.length; i++) {
    if (s[i] === "S") {
        console.log("Found in : "+i);
        break;
    }
}

//while do || untuk melakukan pengulangan suatu variabel berdasarkan suatu kondisi
const found = false;
let i = 0;
while (i < s.length) {  //  while (Kondisi) { aksi } selama kondisi bernilai true maka lakukan aksi dalam blok.
    if (s[i]==='p'){
        console.log("Found in :"+i);
    }
    i++;
}

//do while
let y =0;
do {
    if (s[y]==='p'){
        console.log("Found in :"+i);
    }
    y++
} while (y < s.length);
