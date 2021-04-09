// Soal 1
// function sum(n){        
// if (toString.call(n) !== "[object Array]")
//        return false;
//          var total =  0;
//                for(var i=0;i<n.length;i++)
//                  {                  
//                    if(isNaN(n[i])){
//                    continue;
//                     }
//                      total += Number(n[i]);
//                   }
//                 return total;
//                }
//    console.log(sum([3,4,5,6]));
 
//Soal 2
// function reverse(n) {
//     const reversed = n.toString().split('').reverse().join('');
//     return reversed;
//   }
//   console.log(reverse(1234));

//Soal 3
// function howManyFrogJum(x, y, k) {
//     return (Math.ceil((y-x)/k))
// }
// console.log(howManyFrogJum(10,85,30));


//soal 4
// function howManyWord(s) {
//    var i =0;
//    var numberofwords=1;

//    while(i<= s.length) {
//        if (s.substring(i,i+1) == " ") {
//            numberofwords++;
//            i++;
//        }
//        if (s.substring(i,i+1) == "\n") {
//         numberofwords++;
//         i++;

//        }
//        i++;
//    }
//    return numberofwords;
// }
//   console.log(howManyWord("aku suka javascript fullstack"));

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