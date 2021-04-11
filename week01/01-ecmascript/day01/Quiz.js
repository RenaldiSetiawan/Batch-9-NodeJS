// Soal 1
function sumDigit(n) {  //(n) adalah parameter
    
   let digit1 = 0, digit2 = 0, digit3 = 0, digit4 = 0, r = 0; // Deklarasi variable (var/let/const)
   // let adalah block scope : let tidak akan mengijinkan duplikasi variable
   digit4 = Math.floor(n / 1000);
   r = n % 1000;
   digit3 = Math.floor(r / 100);
   r = r % 100;
   digit2 = Math.floor(r / 10);
   digit1 = r % 10;

   return digit1 + digit2 + digit3 + digit4; //Fungsi RETURN adalah mengembalikan nilai
}

console.log(sumDigit(3456))

//Soal 2
function reverse(n) {
    const reversed = n.toString().split('').reverse().join('');
    return reversed; //Fungsi RETURN adalah mengembalikan nilai
  }
  console.log(reverse(1234));

//Soal 3
function howManyFrogJum(x, y, k) {
    return (Math.ceil((y-x)/k))  //Fungsi RETURN adalah mengembalikan nilai
}
console.log(howManyFrogJum(10,85,30));


//soal 4
function countWord(s){
   let count =0;
   for (let i = 0; i < s.length; i++) {
       if(s[i] === " " || i===s.length-1){
           count++;
       }
       
   }
   return count; //Fungsi RETURN adalah mengembalikan nilai
} 

console.log(countWord("aku suka javascript"));

// Soal 5
function searchWord(k) {
        const lowerString = k.toLowerCase();
        const characters = lowerString.replace(/[\W_]/g, '');
        const len = characters.length;
    
        for (var i = 0; i < len / 2; i++) {
           if (characters[i] !== characters[len - 1 - i]) return false;
        }
        return true;
      }
      
      console.log(searchWord("aku suka javascript", "k")); // true

//Soal 6
// const geometricProgression = (end, start = 1, step = 2) =>
//   Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
//     (v, i) => start * step ** i
//   );
// console.log(geometricProgression(2000));

// Soal 7
// function deretSatu(k) {
//     let hasil = '';
//     for (let i = 0; i < k; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '1';
//         }
//         hasil += ',';
//     }
//     return hasil;
// }
// console.log(deretSatu(5));

//soal 8
function negation(n){
   let out = ""
   let counter=0;
   for (let i = 1; i <= n; i++) {
       if (counter <= n){
           out += (i *-1)+","+i +","
           counter++;
       }
   }
   return out;
}

console.log(negation(25))

//soal 9
function randomPosition(k){
   out = ""
   for (let i = 100; i < 999; i++) {
       digit3 = Number(i/100);
       r = i %100;
       digit2 = Number(r/10);
       digit1 = r%10;
       if(digit1 === k|| digit2===k || digit3===k){
           out += i +","
       }        
   }
   return out;
}

console.log(randomPosition(7));

// Soal 10
// function isPalindrome(s) {
//     const lowerString = s.toLowerCase();
//     const characters = lowerString.replace(/[\W_]/g, '');
//     const len = characters.length;

//     for (var i = 0; i < len / 2; i++) {
//        if (characters[i] !== characters[len - 1 - i]) return false;
//     }
//     return true;
//   }
//   console.log(isPalindrome('Kasur ini ruSak')); // true