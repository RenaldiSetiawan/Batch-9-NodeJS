// function factorial(n) { 
//     if (n === 0) {
//     return 1; 
//     }
//   return n * factorial(n-1);
         
// }
// console.log(factorial(5));

function factorial(n){
let total = 1;

for (let i = n; i > 1; i--) {
  total = total * i;
  
}
return total;
}
console.log(factorial(5));