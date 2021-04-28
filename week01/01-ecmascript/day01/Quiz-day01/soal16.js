//16.Buat function factorial untuk menampilkan hasil factorial, contoh : 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) { 
    if (n === 0) {
    return 1; 
    }
  return n * factorial(n-1);
         
}
console.log(factorial(5));
/***************************/
function factorial(n){
let total = 1;

for (let i = n; i > 1; i--) {
  total = total * i;
  
}
return total;
}
console.log(factorial(5));