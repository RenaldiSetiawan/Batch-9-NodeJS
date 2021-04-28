// init array
const numbers = [1,2,3,4,5]
console.log(numbers);

//acces array tiap index
console.log(numbers[3]);

//add new element di index terakhir array (lastindex)
numbers.push(8);
console.log(numbers);

// add new element di first index
numbers.unshift(10)
console.log(numbers);

// Hapus element di first Index
numbers.shift();
console.log(numbers);

// Hapus element di Last Index
numbers.pop();
console.log(numbers)


/* Sesuai namanya “spread”, 
   fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya 
   iterable object menjadi beberapa elemen. 
   Spread operator dituliskan dengan tiga titik (...). 
   Mari kita lihat contoh kode berikut: */

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);
