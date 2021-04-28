// // //process.stdout.write("*") untuk tulis horizontal

// //take input from the users
// let a = 9
// let b = 5;

// //using destructuring assignment
// [a, b] = [b, a];

// console.log(`Before Swap => a=${b}, b=${a}`);
// console.log(`After Swap => a=${a}, b=${b}`);

/* 11.Terdapat dua variable yaitu a & b, masing masing menyimpan nilai integer. Buat function untuk
      memindahkan value dari variable a ke variable b tanpa membuat variable ke 3 */

let a = 9
let b = 5;

function pindah(a, b){

    [a, b] = [b, a];
    return a, b;
}
console.log(pindah(`Before Swap => a=${a}, b=${b}`));
console.log(pindah(`After Swap => a=${b}, b=${a}`));

