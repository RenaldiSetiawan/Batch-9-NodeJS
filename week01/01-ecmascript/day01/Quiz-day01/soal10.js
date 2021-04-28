/* 10.Buat function isPalindrome untuk mencek apakah kata yang diinput palindrome. Return function
      true jika palindrome.
 */

      console.log("Soal 10")
      function isPalindrome(words) {
          words = words.toLowerCase()
          for (let i = 0; i < words.length/2; i++) {
              if (words[i] !== words[words.length-(i+1)]) return false
          }
          return true
      }
      console.log(isPalindrome('Kasur Ini ruSak'))
    