/* 5. Buat function cariKata dengan dua parameter, dimana parameter pertama adalah kalimat yang
akan dicari, parameter kedua adalah kata yang akan dicari dari inputan pertama. Return function
adalah booelan.
 */ 

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
    